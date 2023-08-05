import { useDispatch, useSelector } from 'react-redux'
import styles from '../../css/user-interests.module.css'
import { useEffect } from 'react'
import { getTrendingPosts } from '../../features/post/postSlice'
import PostBrief from './PostBrief'

const Trending = () => {
  const { trendingPosts } = useSelector((store) => store.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingPosts())
  }, [])

  return (
    <div className={styles.main}>
      <div>
        <h2>Trending</h2>
        <section>
          {trendingPosts.map((post) => {
            return <PostBrief key={post._id} {...post} />
          })}
        </section>
      </div>
    </div>
  )
}
export default Trending
