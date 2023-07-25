import { Link, Outlet } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import { useDispatch, useSelector } from 'react-redux'
import { FaCamera, FaDotCircle } from 'react-icons/fa'
import styles from '../../css/dashboardhead.module.css'
import { BsPeopleFill } from 'react-icons/bs'
import { useState } from 'react'
import { convertToBase64 } from '../../utils/actions'
import { useEffect } from 'react'
import { updateUser } from '../../features/user/userSlice'
import Loading from '../../components/Loading'

const SharedDashboard = () => {
  const { user, darkMode, isLoading } = useSelector((store) => store.user)
  const [image, setImage] = useState('')
  const dispatch = useDispatch()

  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setImage(base64)
  }

  useEffect(() => {
    if (image) {
      dispatch(updateUser({ id: user.user._id, data: { profileImage: image } }))
    }
  }, [image])

  return (
    <div>
      <h2
        style={{
          color: 'var(--purpleBlue)',
          margin: '30px auto',
          width: '90%',
          maxWidth: '1100px',
        }}
      >
        Dashboard
      </h2>
      <section
        className={
          darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`
        }
      >
        <article>
          {isLoading ? (
            <Loading />
          ) : (
            <img src={user.user.profileImage} alt='photo' />
          )}
          <label htmlFor='profileImage'>
            <span>
              <FaCamera />
            </span>
          </label>
          <input
            type='file'
            name='profileImage'
            id='profileImage'
            onChange={uploadImage}
          />
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
