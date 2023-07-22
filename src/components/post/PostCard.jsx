import { useEffect, useState } from 'react'
import customFetch from '../../utils/axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { FaComment, FaThumbsUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  likePost,
  toggleCommentTab,
  toggleTab,
} from '../../features/single-post/singlePostSlice'
import styles from '../../css/post.module.css'
import PostActions from './PostActions'
import { handleLike } from '../../utils/actions'

const PostCard = ({
  _id,
  title,
  createdBy,
  tags,
  readTime,
  createdAt,
  updatedAt,
  image,
  content,
  likes,
}) => {
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(false)
  const createdDate = moment(createdAt).format('MMMM DD, YYYY')
  const updatedDate = moment(updatedAt).format('MMMM DD, YYYY')
  const { user } = useSelector((store) => store.user)
  const { comments, commentsIsLoading } = useSelector(
    (store) => store.singlePost
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const viewUser = async () => {
    try {
      setLoading(true)
      const { data } = await customFetch(`user/view/${createdBy}`)
      setCreator(data.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    viewUser()
  }, [])

  return (
    <section className={styles['post-card']}>
      <h2>{title}</h2>
      <p>{readTime} read</p>
      <section>
        <img src={loading ? '' : creator?.profileImage} alt='photo' />
        <article>
          <Link to={`/view/${creator?.username}`}>
            {loading ? '' : creator?.username}
          </Link>
          <p>
            {tags.map((tag, i) => {
              return <span key={i}>{tag}</span>
            })}
          </p>
          <p>
            {createdDate}{' '}
            {createdAt !== updatedAt && <span>(Updated: {updatedDate})</span>}
          </p>
        </article>
      </section>
      <img src={image} alt={title} />
      <article>{content}</article>
      <PostActions
        likes={likes}
        handleLike={() => handleLike(user, likes, _id, dispatch, navigate)}
        user={user}
        commentsIsLoading={commentsIsLoading}
        comments={comments}
      />
    </section>
  )
}
export default PostCard
