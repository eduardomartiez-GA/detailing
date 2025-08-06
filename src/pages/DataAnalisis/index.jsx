import React from 'react'
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export const DataAnalisis = () => {
  const items = [
    { id: 1, title: 'Programa 1', description: 'Descripción 1', tags: ['Etiqueta 1', 'Etiqueta 2'] },
    { id: 2, title: 'Programa 2', description: 'Descripción 2', tags: ['Etiqueta 1', 'Etiqueta 3', 'Etiqueta 4'] },
    { id: 3, title: 'Programa 3', description: 'Descripción 3', tags: ['Etiqueta 1', 'Etiqueta 2'] },
    { id: 5, title: 'Programa 5', description: 'Descripción 5', tags: ['Etiqueta 1', 'Etiqueta 2'] },
  ]
  const data = [
    {
      name: 'Ene',
      ventas: 4000,
      gastos: 2400,
    },
    {
      name: 'Feb',
      ventas: 3000,
      gastos: 1398,
    },
    {
      name: 'Mar',
      ventas: 2000,
      gastos: 9800,
    },
    {
      name: 'Abr',
      ventas: 2780,
      gastos: 3908,
    },
    {
      name: 'May',
      ventas: 1890,
      gastos: 4800,
    },
    {
      name: 'Jun',
      ventas: 2390,
      gastos: 3800,
    },
    {
      name: 'Jul',
      ventas: 3490,
      gastos: 4300,
    },
    {
      name: 'Ago',
      ventas: 3490,
      gastos: 4300,
    },
    {
      name: 'Sep',
      ventas: 3490,
      gastos: 4300,
    },
    {
      name: 'Oct',
      ventas: 3490,
      gastos: 4300,
    },
    {
      name: 'Nov',
      ventas: 3490,
      gastos: 4300,
    },
    {
      name: 'Dic',
      ventas: 3490,
      gastos: 4300,
    },
  ]

  return (
    <div className='bg-white p-2 rounded'>
      <h1 className='text-xl font-semibold mb-2'>Grid</h1>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {items.map(item => (
          <div key={item.id} className='bg-white rounded shadow p-4 hover:shadow-lg transition-shadow'>
            <h2 className='text-xl font-semibold mb-2'>{item.title}</h2>
            <p className='text-gray-600'>{item.description}</p>
            <div className='mt-2'>
              {item.tags.map(tag => (
                <span key={tag} className='text-white text-xs bg-amber-400 rounded-lg px-2 py-0.5 ml-2'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1 className='text-xl font-semibold mb-2'>Filtros</h1>
      <div>
        <div className='flex flex-wrap'>
          <button className='bg-green-500 hover:opacity-80 text-white rounded-lg px-4 py-2 m-1'>Crear</button>
          <button className='bg-red-500 hover:opacity-80 text-white rounded-lg px-4 py-2 m-1'>Eliminar</button>
          <button className='bg-blue-500 hover:opacity-80 text-white rounded-lg px-4 py-2 m-1'>Actualizar</button>
        </div>
      </div>
      <h1 className='text-xl font-semibold mb-2'>Tabla</h1>
      <div className='flex'>
        <table className='w-full bg-white border border-gray-200'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b'>ID</th>
              <th className='py-2 px-4 border-b'>Título</th>
              <th className='py-2 px-4 border-b'>Descripción</th>
              <th className='py-2 px-4 border-b'>Etiquetas</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td className='py-2 px-4 border-b'>{item.id}</td>
                <td className='py-2 px-4 border-b'>{item.title}</td>
                <td className='py-2 px-4 border-b'>{item.description}</td>
                <td className='py-2 px-4 border-b'>{item.tags.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className='text-xl font-semibold mb-2'>Gráficos</h1>
      <div className='flex'>
        <div className='w-1/2 h-[400px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='ventas' stroke='#24d600' activeDot={{ r: 8 }} />
              <Line type='monotone' dataKey='gastos' stroke='#d62600' />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='w-1/2 h-[400px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='ventas' fill='#24d600' />
              <Bar dataKey='gastos' fill='#d62600' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
