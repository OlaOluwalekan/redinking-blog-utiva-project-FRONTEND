import { FaComment, FaThumbsUp } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {
  toggleCommentTab,
  toggleTab,
} from '../../features/single-post/singlePostSlice'

const PostActions = ({
  likes,
  handleLike,
  user,
  commentsIsLoading,
  comments,
}) => {
  const dispatch = useDispatch()

  return (
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
        <span
          onClick={() => {
            dispatch(toggleCommentTab(true))
            dispatch(toggleTab('like'))
          }}
        >
          {likes.length} Likes
        </span>
      </article>
      <article
        onClick={() => {
          dispatch(toggleCommentTab(true))
          dispatch(toggleTab('comment'))
        }}
      >
        <span>
          <FaComment />
        </span>
        <span>{commentsIsLoading ? 0 : comments.length} Comments</span>
      </article>
    </div>
  )
}
export default PostActions
