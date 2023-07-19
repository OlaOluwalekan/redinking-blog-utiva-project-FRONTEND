import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostBySlug } from '../features/single-post/singlePostSlice'
import Loading from '../components/Loading'
import PostCard from '../components/post/PostCard'
import styles from '../css/post.module.css'

const PostDetails = () => {
  const { postSlug } = useParams()
  const dispatch = useDispatch()
  const { post, isLoading } = useSelector((store) => store.singlePost)
  const { darkMode } = useSelector((store) => store.user)
  // console.log(post)

  useEffect(() => {
    dispatch(getPostBySlug(postSlug))
  }, [])

  if (isLoading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading />
      </div>
    )
  }

  if (!post) {
    return <h3>The post you seek may have been removed</h3>
  }

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <PostCard {...post} />
      </div>
    </div>
  )
}
export default PostDetails
