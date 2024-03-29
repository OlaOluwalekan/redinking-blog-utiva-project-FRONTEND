import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  getPostBySlug,
  getPostComments,
} from '../features/single-post/singlePostSlice'
import Loading from '../components/Loading'
import PostCard from '../components/post/PostCard'
import styles from '../css/post.module.css'
import CommentTab from '../components/post/CommentTab'
import Error from './Error'

const PostDetails = () => {
  const { postSlug } = useParams()
  const dispatch = useDispatch()
  const { post, isLoading, comments } = useSelector((store) => store.singlePost)
  const { darkMode } = useSelector((store) => store.user)

  useEffect(() => {
    dispatch(getPostBySlug(postSlug))
    dispatch(getPostComments(postSlug))
    document.title = `RedInking | ${postSlug}`
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
    return <Error />
  }

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <PostCard {...post} />
        <CommentTab />
      </div>
    </div>
  )
}
export default PostDetails
