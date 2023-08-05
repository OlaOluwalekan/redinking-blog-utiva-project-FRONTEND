import { useSelector } from 'react-redux'
import styles from '../../css/follower.module.css'
import Follower from '../../components/follow/Follower'

const Following = () => {
  const { user, darkMode } = useSelector((store) => store.user)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>Following</h2>
        {user?.user.following.map((follower) => {
          return (
            <Follower key={follower} id={follower} userId={user?.user._id} />
          )
        })}
      </div>
    </div>
  )
}
export default Following
