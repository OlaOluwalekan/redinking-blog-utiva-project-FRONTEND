import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getNewestPosts } from '../../features/post/postSlice'
import styles from '../../css/newest.module.css'
import PostBrief from './PostBrief'

const NewestPosts = () => {
  const dispatch = useDispatch()
  const { newestPosts } = useSelector((store) => store.post)

  useEffect(() => {
    dispatch(getNewestPosts())
  }, [])

  return (
    <div className={styles.main}>
      <div>
        <h2>Newest</h2>
        <section>
          {newestPosts.map((post) => {
            return <PostBrief key={post._id} {...post} />
          })}
        </section>
      </div>
    </div>
  )
}
export default NewestPosts
