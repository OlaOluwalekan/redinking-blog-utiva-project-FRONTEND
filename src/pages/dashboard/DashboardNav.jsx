import { Link } from 'react-router-dom'
import styles from '../../css/dashboardnav.module.css'
import { useSelector } from 'react-redux'

const DashboardNav = () => {
  const { user } = useSelector((store) => store.user)
  return (
    <nav className={styles.main}>
      <Link to={`/${user.user.username}`}>Profile</Link>
      <Link to={`/${user.user.username}/bookmarks`}>Bookmarks</Link>
      <Link to={`/${user.user.username}/posts`}>My Posts</Link>
    </nav>
  )
}
export default DashboardNav
