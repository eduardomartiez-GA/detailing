import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

import { IoMdEyeOff } from 'react-icons/io'
import { IoMdEye } from 'react-icons/io'
import { MdOutlineKey } from 'react-icons/md'
import { FaUserTie } from 'react-icons/fa'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const { login, isAuthenticated, loading } = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  // Redirigir si ya está autenticado
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async e => {
    e.preventDefault()
    const success = await login(username, password)

    if (success.auth) {
      setMessage(success.message)
      navigate('/')
    } else {
      setMessage(success.message)

      setTimeout(() => {
        setMessage('')
      }, 2500)
    }
  }

  const handlePassworsVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#2b297e] from-50% to-[#fafafa] to-50%'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center bg-white max-w-[80%] lg:max-w-[27%] h-[55%] min-h-[400px] rounded-lg shadow-[2px_9px_16px_6px_rgba(71,_133,_136,_0.22)]'
      >
        <img
          src='https://armstrongsistemas.com/AtmAudit/Logo_Armstrong.png'
          alt=''
          className='py-[30px] px-[50px] my-0 mx-[30px] mb-[15px] w-[80%]'
        />
        <div className='h-[35px] w-[80%] overflow-hidden flex items-center justify-center rounded-lg border-none outline-none text-black bg-[#f5f5f5] mb-[30px]'>
          <FaUserTie className='w-[30px] text-xl mx-[10px] text-black' />
          <input
            type='text'
            className='h-[30px] text-[clamp(0.7rem,1vw,1rem)] bg-transparent border-none outline-none w-full text-[#726f6f]'
            placeholder='Email'
            value={username}
            onChange={e => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className='h-[35px] w-[80%] overflow-hidden flex items-center justify-center rounded-lg border-none outline-none text-black bg-[#f5f5f5] mb-[30px]'>
          <MdOutlineKey className='w-[30px] text-xl mx-[10px] text-black' />
          <input
            type={showPassword ? 'text' : 'password'}
            className='h-[30px] text-[clamp(0.7rem,1vw,1rem)] bg-transparent border-none outline-none w-full text-[#726f6f]'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
          />
          <IoMdEye
            className={`mx-[20px] cursor-pointer text-[#000] w-[50px] text-[1.3rem] ${showPassword ? '' : 'hidden'}`}
            onClick={handlePassworsVisibility}
          />
          <IoMdEyeOff
            className={`mx-[20px] cursor-pointer text-[#000] w-[50px] text-[1.3rem] ${!showPassword ? '' : 'hidden'}`}
            onClick={handlePassworsVisibility}
          />
        </div>
        <button
          type='submit'
          className='bg-[#2b297e] text-white w-[80%] h-[35px] border-none rounded-md select-none mb-[30px] disabled:opacity-50'
          disabled={loading}
        >
          {loading ? 'CARGANDO...' : 'INGRESAR'}
        </button>
        {loading && (
          <div className='w-5 h-5 border-[3px] border-white border-t-[3px] border-t-[#3498db] rounded-full animate-spin my-0 mx-auto'></div>
        )}
        {message && <p className='text-red-500 text-[clamp(0.7rem,1vw,1rem)]'>{message}</p>}
      </form>
    </div>
  )
}
