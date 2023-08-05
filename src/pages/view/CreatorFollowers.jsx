import { useSelector } from 'react-redux'
import styles from '../../css/follower.module.css'
import CreatorFollower from '../../components/view/CreatorFollower'

const CreatorFollowers = () => {
  const { creator, user } = useSelector((store) => store.user)

  return (
    <div className={styles.main}>
      <div>
        <h2>Followers</h2>
        {creator?.followers.map((follower) => {
          return (
            <CreatorFollower
              key={follower}
              userId={follower}
              creatorId={creator?._id}
            />
          )
        })}
      </div>
    </div>
  )
}
export default CreatorFollowers
