import { Link, Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import { useSelector } from 'react-redux'
import { FaCamera, FaDotCircle } from 'react-icons/fa'
import styles from '../../css/dashboardhead.module.css'
import { BsPeopleFill } from 'react-icons/bs'

const SharedDashboard = () => {
  const { user, darkMode } = useSelector((store) => store.user)

  return (
    <div>
      <h2>Dashboard</h2>
      <section
        className={
          darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`
        }
      >
        <article>
          <img src={user.user.profileImage} alt='photo' />
          <label htmlFor='profileImage'>
            <span>
              <FaCamera />
            </span>
          </label>
          <input type='file' name='profileImage' id='profileImage' />
        </article>
        <div>
          <h2>{user?.user.username}</h2>
          <article>
            <span>
              <BsPeopleFill />
            </span>
            <Link to={`/${user.user.username}/followers`}>
              {user?.user.followers.length} followers
            </Link>
            <span>||</span>
            <Link to={`/${user.user.username}/following`}>
              {user?.user.following.length} following
            </Link>
          </article>
        </div>
      </section>
      <DashboardNav />
      <Outlet />
    </div>
  )
}
export default SharedDashboard
