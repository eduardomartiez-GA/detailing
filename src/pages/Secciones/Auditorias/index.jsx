import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import { FaFileUpload, FaTimes } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useConfig } from '@/hooks/useConfig'

export const Auditorias = () => {
  const { options } = useConfig()
  const [uploadedFiles, setUploadedFiles] = useState({})
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZ2RsYWF0dGlpMTA2NTRwL0V2aWRlbmNpYXNCYW5jb3MvcHVibGljL2FwaS9Mb2dpbiIsImlhdCI6MTc1MjI1ODA5OCwiZXhwIjoxNzUyMjYxNjk4LCJuYmYiOjE3NTIyNTgwOTgsImp0aSI6InVDeDlZcEJhVVkzR0psbGEiLCJzdWIiOiIxMDI4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.uewGzIWRKUiPdZf9jDKuIOGckIWZIoKnRBue65tfnwY'

  useEffect(() => {
    const fetchData = () => {
      fetch('http://172.16.10.42/apis/EvidenciasBancos/public/api/ObtenerEvidencias?IdCliente=272', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          // Maneja la data aquí
          console.log(data)
        })
        .catch(err => console.error(err))
    }

    fetchData() // esto ejecta cyuando se monta el componente
    const interval = setInterval(fetchData, 120000) // 2 min

    return () => clearInterval(interval)
  }, [])

  const mockUsers = [
    {
      id: 1,
      Sucursal: 'Tlaxcala',
      TipoServicio: 'Traslado',
      Plaza: 'Tapioca',
      images: ['avatars/avatar1.svg', 'https://i.redd.it/giuv2m8fmwme1.jpeg', 'avatars/avatar3.svg'],
      EstatusServicio: 'Computadora desvielada',
    },
    {
      id: 2,
      Sucursal: 'Mataulipas',
      TipoServicio: 'Tampico',
      Plaza: 'Guchao',
      images: [
        'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2025/06/guardianes-noche-kimetsu-no-yaiba-fortaleza-infinita-4339813.jpg',
        'https://hips.hearstapps.com/hmg-prod/images/kimetsu-no-yaiba-temporada-4-2-6496f64cd7493.jpg',
        'https://es.web.img3.acsta.net/r_654_368/img/da/ff/daff4e4e3b1bc00c96bd2ecc966ddda0.jpg',
      ],
      EstatusServicio: 'No se subio por que no funciono',
    },
    {
      id: 3,
      Sucursal: 'Jalisco',
      TipoServicio: 'Resguardo',
      Plaza: 'Concentro',
      images: ['avatars/avatar7.svg', 'https://images8.alphacoders.com/133/1331191.png', 'avatars/avatar9.svg'],
      EstatusServicio: 'Sistema de audio no funcionaba y daba calor',
    },
  ]

  const handleFileChange = (userId, e) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFiles(prev => ({ ...prev, [userId]: e.target.files[0] }))
    }
  }

  const handleRemoveFile = userId => {
    setUploadedFiles(prev => ({ ...prev, [userId]: null }))
  }

  const handleUploadFile = userId => {
    const file = uploadedFiles[userId]
    if (!file) return

    // Aquí implementas la lógica para subir el archivo
    console.log('Subiendo archivo para usuario', userId, file)

    // Ejemplo con FormData (para enviar a una API)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('userId', userId.toString())

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Archivo subido:', data)
        // Puedes resetear el estado o mostrar un mensaje de éxito
      })
      .catch(error => {
        console.error('Error al subir:', error)
      })
  }

  return (
    <>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Auditorias</h1>
        <p className='text-gray-600'>Estadisticas de auditorias.</p>
      </div>

      {/* TABLA */}
      <div className='mt-8 bg-white rounded-lg shadow-md border border-gray-200'>
        <div className='px-6 py-4 border-b border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-900'>Actividades Recientes</h2>
        </div>
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className={`${options.headTable} ${options.text}`}>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase'>Imágenes</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase'>Sucursal</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase'>Tipo de Servicio</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase'>Plaza</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase'>Estatus del Servicio</th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase'>Evidencia</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {mockUsers.map(user => (
                <tr key={user.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap min-w-52'>
                    <div className='flex gap-2 select-none'>
                      {user.images.map((src, i) => (
                        <Dialog key={i}>
                          <DialogTrigger asChild>
                            <img
                              src={src}
                              alt={`img-${i}`}
                              className='w-12 h-12 object-cover rounded-full cursor-pointer hover:scale-105 transition'
                            />
                          </DialogTrigger>
                          <DialogContent className='max-w-lg'>
                            <div className='hidden'>
                              <DialogTitle>Vista previa de imagen</DialogTitle>
                              <DialogDescription>Imagen ampliada del usuario</DialogDescription>
                            </div>
                            <img src={src} alt={`preview-${i}`} className='w-full h-auto rounded select-none' />
                          </DialogContent>
                        </Dialog>
                      ))}
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm font-medium text-gray-900'>{user.Sucursal}</td>
                  <td className='px-6 py-4 text-sm text-gray-500'>{user.TipoServicio}</td>
                  <td className='px-6 py-4 text-sm text-gray-500'>{user.Plaza}</td>
                  <td className='px-6 py-4'>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                        user.online ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      <span>{user.EstatusServicio}</span>
                    </span>
                  </td>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-2'>
                      {uploadedFiles[user.id] ? (
                        <>
                          <span className='text-sm text-gray-600 truncate max-w-xs'>
                            {uploadedFiles[user.id]?.name}
                          </span>
                          <button onClick={() => handleRemoveFile(user.id)} className='text-red-500 hover:text-red-700'>
                            <FaTimes />
                          </button>
                          <Button
                            size='sm'
                            onClick={() => handleUploadFile(user.id)}
                            className={`${options.button} ${options.hover} cursor-pointer`}
                          >
                            Subir
                          </Button>
                        </>
                      ) : (
                        <div className='flex items-center gap-2'>
                          <Label htmlFor={`file-upload-${user.id}`} className='cursor-pointer'>
                            <FaFileUpload className='text-gray-500 hover:text-gray-700' />
                            <Input
                              id={`file-upload-${user.id}`}
                              type='file'
                              // accept='image/*'
                              onChange={e => handleFileChange(user.id, e)}
                              className='hidden'
                            />
                          </Label>
                          <span className='text-sm text-gray-500'>Subir evidencia</span>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
