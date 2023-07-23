import { Link, NavLink } from 'react-router-dom'
import styles from '../../css/dashboardnav.module.css'
import { useSelector } from 'react-redux'

const DashboardNav = () => {
  const { user } = useSelector((store) => store.user)
  return (
    <nav className={styles.main}>
      <div>
        <NavLink
          to={`/${user.user.username}/`}
          className={({ isActive }) => {
            return isActive ? `${styles.active}` : `${styles['not-active']}`
          }}
        >
          Profile
        </NavLink>
        <NavLink
          to={`/${user.user.username}/bookmarks`}
          className={({ isActive }) => {
            return isActive ? `${styles.active}` : `${styles['not-active']}`
          }}
        >
          Bookmarks
        </NavLink>
        <NavLink
          to={`/${user.user.username}/posts`}
          className={({ isActive }) => {
            return isActive ? `${styles.active}` : `${styles['not-active']}`
          }}
        >
          My Posts
        </NavLink>
      </div>
    </nav>
  )
}
export default DashboardNav
