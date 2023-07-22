import { useDispatch, useSelector } from 'react-redux'
import { handleLikeComment } from '../../utils/actions'
import { useNavigate } from 'react-router-dom'
import { FaReply, FaThumbsUp } from 'react-icons/fa'
import { getPostComments } from '../../features/single-post/singlePostSlice'

const CommentActions = ({ likes, _id, postId, handleOpenReply }) => {
  const { user } = useSelector((store) => store.user)
  const { comments } = useSelector((store) => store.singlePost)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div>
      <article
        onClick={(e) => {
          handleLikeComment(user, likes, _id, dispatch, navigate, postId)
          dispatch(getPostComments())
          e.stopPropagation()
        }}
      >
        <span
          style={{
            color: likes.includes(user?.user._id)
              ? 'var(--purpleBlue)'
              : 'unset',
          }}
        >
          <FaThumbsUp />
        </span>
        <span>{likes.length}</span>
      </article>
      <article
        onClick={(e) => {
          handleOpenReply()
          e.stopPropagation()
        }}
      >
        <span>
          <FaReply />
        </span>
        {/* <span>{commentsIsLoading ? 0 : comments.length} Comments</span> */}
      </article>
    </div>
  )
}
export default CommentActions
