import { FaBookmark, FaComment, FaThumbsUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
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
  handleBookmarkPost,
}) => {
  const dispatch = useDispatch()
  const { post } = useSelector((store) => store.singlePost)

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
      <article
        onClick={handleBookmarkPost}
        style={{
          color: user?.user.bookmarks.includes(post.slug)
            ? 'var(--purpleBlue)'
            : 'unset',
        }}
      >
        <FaBookmark />
      </article>
    </div>
  )
}
export default PostActions
