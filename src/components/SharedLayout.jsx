import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const SharedLayouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default SharedLayouts
