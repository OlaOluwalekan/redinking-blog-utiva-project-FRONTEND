import { useSelector } from 'react-redux'
import Follower from '../../components/follow/Follower'
import styles from '../../css/follower.module.css'

const Followers = () => {
  const { user, darkMode } = useSelector((store) => store.user)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>Followers</h2>
        {user?.user.followers.map((follower) => {
          return (
            <Follower key={follower} id={follower} userId={user?.user._id} />
          )
        })}
      </div>
    </div>
  )
}
export default Followers
