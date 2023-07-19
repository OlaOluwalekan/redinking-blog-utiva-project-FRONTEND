import { useEffect, useState } from 'react'
import customFetch from '../../utils/axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { FaComment, FaThumbsUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '../../features/single-post/singlePostSlice'

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
  comments,
}) => {
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(false)
  const createdDate = moment(createdAt).format('MMMM DD, YYYY')
  const updatedDate = moment(updatedAt).format('MMMM DD, YYYY')
  const { user } = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [liked, setLiked] = useState(false)

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

  const handleLike = () => {
    if (!user) {
      navigate('/auth/login')
      return
    }
    let newLikes
    if (likes.includes(user.user._id)) {
      newLikes = likes.filter((like) => {
        return like !== user.user._id
      })
    } else {
      newLikes = [...likes, user.user._id]
    }
    dispatch(likePost({ postId: _id, likes: newLikes }))
  }
  console.log(likes)

  return (
    <section>
      <h2>{title}</h2>
      <p>{readTime} read</p>
      <section>
        <img src={loading ? '' : creator?.profileImage} alt='photo' />
        <article>
          <Link>{loading ? '' : creator?.username}</Link>
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
      <div>
        <article>
          <span
            onClick={handleLike}
            style={{
              color: likes.includes(user?.user._id)
                ? 'var(--purpleBlue)'
                : 'unset',
            }}
          >
            <FaThumbsUp />
          </span>
          <span>{likes.length} Likes</span>
        </article>
        <article>
          <span>
            <FaComment />
          </span>
          <span>{comments.length} Comments</span>
        </article>
      </div>
    </section>
  )
}
export default PostCard
