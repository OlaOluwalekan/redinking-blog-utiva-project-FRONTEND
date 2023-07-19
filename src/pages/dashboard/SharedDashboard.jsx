import { Link, Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'

const SharedDashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardNav />
      <Outlet />
    </div>
  )
}
export default SharedDashboard
