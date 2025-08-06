import { Outlet } from 'react-router-dom'

export function MainContent() {
  return (
    <div className='p-6'>
      <Outlet />
    </div>
  )
}
