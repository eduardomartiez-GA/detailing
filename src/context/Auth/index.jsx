// src/context/AuthProvider.tsx
import * as jose from 'jose'
import React, { useState, useEffect } from 'react'
import { AuthContext } from '@/hooks/useAuth'

const backend_url = import.meta.env.VITE_BACKEND_URL
const SISTEM = import.meta.env.VITE_APP_SISTEM
const TIME_TOKEN = import.meta.env.VITE_TIME_TOKEN

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    token: null,
    loading: true,
  })

  const setLoading = loading => {
    setAuthState(prev => ({ ...prev, loading }))
  }

  const verifySession = async sessionCookie => {
    try {
      const secret = new TextEncoder().encode(import.meta.env.VITE_APP_SECRET)
      const { payload } = await jose.jwtVerify(sessionCookie, secret)
      return payload
    } catch (error) {
      console.error('Error verifying session:', error)
      return null
    }
  }

  const checkAuth = async () => {
    try {
      setLoading(true)
      const sessionCookie = localStorage.getItem('sessionToken')

      if (!sessionCookie) {
        setAuthState(prev => ({ ...prev, isAuthenticated: false, user: null }))
        return
      }

      const user = await verifySession(sessionCookie)
      if (user) {
        const usuarioOnLog = localStorage.getItem('user')
        setAuthState(prev => ({
          ...prev,
          isAuthenticated: true,
          user: usuarioOnLog ? JSON.parse(usuarioOnLog) : null,
        }))
      } else {
        localStorage.removeItem('sessionToken')
        localStorage.removeItem('user')
        setAuthState(prev => ({ ...prev, isAuthenticated: false, user: null }))
      }
    } catch (error) {
      console.error('Error checking Success:', error)
      setAuthState(prev => ({ ...prev, isAuthenticated: false, user: null }))
    } finally {
      setLoading(false)
    }
  }

  const generateToken = async user => {
    try {
      const secret = new TextEncoder().encode(import.meta.env.VITE_APP_SECRET)
      const jwtPayload = {
        IdUsuario: user.IdUsuario,
        Nombre: user.Nombre,
        Sistema: user.Sistema,
      }
      return await new jose.SignJWT(jwtPayload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(TIME_TOKEN)
        .sign(secret)
    } catch (err) {
      console.error('Error generating token:', err)
      return null
    }
  }

  const login = async (username, password) => {
    try {
      setLoading(true)

      if (!username.includes('@')) username = `${username}@grupoarmstrong.com`

      const response = await fetch(
        `${backend_url}/Validar/Contrasena?Sistema=tracker&Usuario=${username}&Contrasena=${password}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          // credentials: 'include',
        },
      )

      if (!response.ok) {
        const errorData = await response.json()
        return {
          Success: false,
          Message: errorData.Message || 'Authentication failed',
          Caducidad: 0,
          Forzar: 0,
        }
      }

      const apiResponse = await response.json()
      const user = apiResponse.Data
      const token = await generateToken(user)

      if (!token) {
        return { Success: false, Message: 'Failed to create session' }
      }

      localStorage.setItem('sessionToken', token)
      localStorage.setItem('user', JSON.stringify(user))
      setAuthState({
        isAuthenticated: true,
        user: user,
        token,
        loading: false,
      })

      return { Success: true, Message: 'Login successful' }
    } catch (error) {
      console.error('Login error:', error)
      return {
        Success: false,
        Message: 'Server connection error',
      }
    } finally {
      setLoading(false)
    }
  }

  const cerrarSesion = async userId => {
    try {
      const response = await fetch('https://armstrongsistemas.com/Pruebas/apirest/Login/public/api/Cerrar/Sesion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ IdUsuario: userId, Sistema: SISTEM }),
      })

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

      const data = await response.json()
      return data.Success === true
    } catch (error) {
      console.error('Logout error:', error)
      return false
    }
  }

  const logout = async () => {
    if (!authState.user?.IdUsuario) {
      cleanup()
      return
    }

    try {
      const success = await cerrarSesion(authState.user.IdUsuario)
      if (!success) {
        console.warn('Remote logout failed, proceeding with local cleanup')
      }
    } catch (error) {
      console.error('Error during remote logout:', error)
    } finally {
      cleanup()
    }
  }

  const cleanup = () => {
    localStorage.removeItem('sessionToken')
    localStorage.removeItem('user')
    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
    })
  }

  // Verificar autenticación al cargar la aplicación
  useEffect(() => {
    checkAuth()
  }, [])

  // Adapter for login to match expected context type
  const loginAdapter = async (username, password) => {
    const result = await login(username, password)
    return {
      auth: result.Success ?? false,
      message: result.Message ?? '',
    }
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: loginAdapter,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
