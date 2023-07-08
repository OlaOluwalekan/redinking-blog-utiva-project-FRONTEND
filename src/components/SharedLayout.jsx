import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const SharedLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default SharedLayouts
