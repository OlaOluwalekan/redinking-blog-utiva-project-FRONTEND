import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInterestPosts } from '../../features/post/postSlice'
import styles from '../../css/user-interests.module.css'
import PostBrief from './PostBrief'

const UserInterestPosts = () => {
  const { userInterestsPosts } = useSelector((store) => store.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInterestPosts())
  }, [])

  return (
    <div className={styles.main}>
      <div>
        <h2>For You</h2>
        <section>
          {userInterestsPosts.map((post) => {
            return <PostBrief key={post._id} {...post} />
          })}
        </section>
      </div>
    </div>
  )
}
export default UserInterestPosts
