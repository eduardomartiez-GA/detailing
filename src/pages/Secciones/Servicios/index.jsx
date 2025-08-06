import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { CheckCircle, XCircle, MoreVertical } from 'lucide-react'
import { useConfig } from '@/hooks/useConfig'
import { ChartBarMultiple } from '@/components/Chart'

export const Servicios = () => {
  const { options } = useConfig()
  const [evidences, setEvidences] = useState([])
  const [selectedStatus, setSelectedStatus] = useState({})
  const [comment, setComment] = useState('')
  const [openCommentDialog, setOpenCommentDialog] = useState(false)
  const [currentUserId, setCurrentUserId] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const paginatedEvidences = evidences.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZ2RsYWF0dGlpMTA2NTRwL0V2aWRlbmNpYXNCYW5jb3MvcHVibGljL2FwaS9Mb2dpbiIsImlhdCI6MTc1MjI2MjQ4NSwiZXhwIjoxNzUyMjc2ODg1LCJuYmYiOjE3NTIyNjI0ODUsImp0aSI6IlJobDd2OXg3NURRMTBaYkIiLCJzdWIiOiIxMDI4IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.4bnYCR24nE7XKspd8A6q_h0Rcxvd7zxcJzR4MnJ-7Js'
  useEffect(() => {
    const fetchData = () => {
      // Aquí tu petición, por ejemplo:
      fetch('http://GDLAATTII10654P/EvidenciasBancos/public/api/ObtenerEvidencias?IdCliente=272', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.Success) {
            setEvidences(data.Data)
          }
          // console.log(data)
        })
        .catch(err => console.error(err))
    }

    fetchData() // Ejecuta al montar
    const interval = setInterval(fetchData, 120000) // Cada 2 minutos

    return () => clearInterval(interval) // Limpia el intervalo al desmontar
  }, [])

  // const cards = [
  //   { title: 'Total de Servicios', value: '1,234', change: '+12%', color: 'bg-blue-500' },
  //   { title: 'Ventas', value: '$45,678', change: '+8%', color: 'bg-green-500' },
  //   { title: 'Unidades', value: '567', change: '+3%', color: 'bg-purple-500' },
  //   { title: 'Descomposturas', value: '89', change: '+15%', color: 'bg-orange-500' },
  // ]
  // const mockUsers = [
  //   {
  //     id: 1,
  //     Sucursal: 'Tlaxcala',
  //     TipoServicio: 'Traslado',
  //     Plaza: 'Tapioca',
  //     images: ['avatars/avatar1.svg', 'avatars/avatar2.svg', 'avatars/avatar3.svg'],
  //     EstatusServicio: true,
  //   },
  //   {
  //     id: 2,
  //     Sucursal: 'Mataulipas',
  //     TipoServicio: 'Tampico',
  //     Plaza: 'Guchao',
  //     images: [
  //       'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2025/06/guardianes-noche-kimetsu-no-yaiba-fortaleza-infinita-4339813.jpg',
  //       'https://hips.hearstapps.com/hmg-prod/images/kimetsu-no-yaiba-temporada-4-2-6496f64cd7493.jpg',
  //       'https://es.web.img3.acsta.net/r_654_368/img/da/ff/daff4e4e3b1bc00c96bd2ecc966ddda0.jpg',
  //     ],
  //     EstatusServicio: true,
  //   },
  //   {
  //     id: 3,
  //     Sucursal: 'Jalisco',
  //     TipoServicio: 'Resguardo',
  //     Plaza: 'Concentro',
  //     images: ['avatars/avatar7.svg', 'avatars/avatar8.svg', 'avatars/avatar9.svg'],
  //     EstatusServicio: true,
  //   },
  // ]

  const handleStatusChange = (userId, value) => {
    if (value === 'offline') {
      setCurrentUserId(userId)
      setOpenCommentDialog(true)
    } else {
      setSelectedStatus(prev => ({ ...prev, [userId]: value }))
    }
  }

  const handleSubmitComment = () => {
    console.log(`Comentario para usuario ${currentUserId}:`, comment)
    setSelectedStatus(prev => ({ ...prev, [currentUserId]: 'offline' }))
    setComment('')
    setOpenCommentDialog(false)
  }

  return (
    <>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Banorte</h1>
        <p className='text-gray-600'>Estadisticas de servicios generales.</p>
      </div>

      {/* ESTADISTICAS */}
      {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200'
          >
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-600 mb-1'>{card.title}</p>
                <p className='text-2xl font-bold text-gray-900'>{card.value}</p>
                <p className='text-sm text-green-600'>{card.change} desde el mes pasado</p>
              </div>
              <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center`}>
                <span className='text-white text-xl'>📊</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      {/* ACTIVIDAD Y GRAFICOS */}
      {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='bg-white rounded-lg shadow-md p-6 border border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Actividad Recent</h2>
          <div className='space-y-4'>
            {[1, 2, 3, 4].map(item => (
              <div key={item} className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                <div className='w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center'>
                  <span className='text-white text-sm'>👤</span>
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-gray-900'>Nuevo usuario registrado</p>
                  <p className='text-xs text-gray-500'>Hace {item * 2} minutos</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-white rounded-lg shadow-md p-6 border border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-900 mb-4'>Gráfico de Ventas</h2>
          <div className='h-64 bg-gray-100 rounded-lg flex items-center justify-center'>
            <div className='text-center'>
              <div className='text-4xl mb-2'>📈</div>
              <p className='text-gray-600'>Gráfico de ventas</p>
              <p className='text-sm text-gray-500'>Aquí irían los datos visuales</p>
            </div>
          </div>
        </div>
      </div> */}

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
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {paginatedEvidences.map(evidence => (
                <tr key={evidence.IdServicio} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap min-w-52'>
                    <div className='flex gap-2 select-none'>
                      {evidence.Evidencias.slice(0, 3).map((imagen, i) => (
                        <Dialog key={`${imagen.IdServicio}-${i}`}>
                          <DialogTrigger asChild>
                            <img
                              src={imagen.RutaArchivo}
                              alt={`img-${i}`}
                              className='w-12 h-12 object-cover rounded-full cursor-pointer hover:scale-105 transition'
                            />
                          </DialogTrigger>
                          <DialogContent className='max-w-lg'>
                            <div className='hidden'>
                              <DialogTitle>Vista previa de imagen</DialogTitle>
                              <DialogDescription>Imagen ampliada del usuario</DialogDescription>
                            </div>
                            <img
                              src={imagen.RutaArchivo}
                              alt={`preview-${i}`}
                              className='w-full h-auto rounded select-none'
                            />
                          </DialogContent>
                        </Dialog>
                      ))}
                      {evidence.Evidencias.length > 3 && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 text-xs cursor-pointer'>
                              +{evidence.Evidencias.length - 3}
                            </div>
                          </PopoverTrigger>
                          <PopoverContent className='w-80'>
                            <h4 className='text-md font-semibold mb-2'>Vista previa de imágenes</h4>
                            <div className='flex flex-wrap gap-2'>
                              {evidence.Evidencias.map((imagen, i) => (
                                <Dialog key={`${imagen.IdServicio}-${i}`}>
                                  <DialogTrigger asChild>
                                    <img
                                      src={imagen.RutaArchivo}
                                      alt={`img-${i}`}
                                      className='w-12 h-12 object-cover rounded-full cursor-pointer hover:scale-105 transition'
                                    />
                                  </DialogTrigger>
                                  <DialogContent className='max-w-lg'>
                                    <div className='hidden'>
                                      <DialogTitle>Vista previa de imagen</DialogTitle>
                                      <DialogDescription>Imagen ampliada del usuario</DialogDescription>
                                    </div>
                                    <img
                                      src={imagen.RutaArchivo}
                                      alt={`preview-${i}`}
                                      className='w-full h-auto rounded select-none'
                                    />
                                  </DialogContent>
                                </Dialog>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm text-gray-900'>{evidence.Sucursal}</td>
                  <td className='px-6 py-4 text-sm text-gray-800'>{evidence.TipoServicio}</td>
                  <td className='px-6 py-4 text-sm text-gray-800'>{evidence.Plaza}</td>
                  <td className='px-6 py-4 text-sm text-gray-800'>
                    <RadioGroup
                      value={selectedStatus[evidence.id] || ''}
                      onValueChange={value => handleStatusChange(evidence.id, value)}
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='online' id={`online-${evidence.id}`} />
                        <Label htmlFor={`online-${evidence.id}`}>En Línea</Label>
                      </div>
                      <div className='flex items-center text-nowrap space-x-2'>
                        <RadioGroupItem value='offline' id={`offline-${evidence.id}`} />
                        <Label htmlFor={`offline-${evidence.id}`}>Fuera de Línea</Label>
                      </div>
                    </RadioGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-between items-center p-4 border-t'>
            <span className='text-sm text-gray-700'>
              Página {currentPage} de {Math.ceil(evidences.length / itemsPerPage)}
            </span>
            <div className='flex gap-2'>
              <Button variant='outline' disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>
                Anterior
              </Button>
              <Button
                variant='outline'
                disabled={currentPage === Math.ceil(evidences.length / itemsPerPage)}
                onClick={() => setCurrentPage(prev => prev + 1)}
              >
                Siguiente
              </Button>
            </div>
          </div>

          <Dialog open={openCommentDialog} onOpenChange={setOpenCommentDialog}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Motivo</DialogTitle>
                <DialogDescription>Motivo por el cual el servicio está fuera de línea.</DialogDescription>
              </DialogHeader>
              <div className='grid py-3'>
                <div className='grid grid-cols-4 items-center'>
                  <Label htmlFor='comment' className='text-right'>
                    Comentario:
                  </Label>
                  <Textarea
                    id='comment'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    className='col-span-3 max-h-40'
                    placeholder='Ejemplo: El equipo está en mantenimiento preventivo...'
                  />
                </div>
              </div>
              <div className='flex justify-end gap-2'>
                <Button
                  variant='outline'
                  onClick={() => {
                    setOpenCommentDialog(false)
                    setComment('')
                  }}
                >
                  Cancelar
                </Button>
                <Button className={`${options.button} ${options.hover} cursor-pointer`} onClick={handleSubmitComment}>
                  Enviar
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  )
}
