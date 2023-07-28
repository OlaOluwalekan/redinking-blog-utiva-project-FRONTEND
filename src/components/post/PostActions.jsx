import {
  FaBookmark,
  FaComment,
  FaEye,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShare,
  FaShareAlt,
  FaThumbsUp,
  FaTwitter,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  toggleCommentTab,
  toggleTab,
} from '../../features/single-post/singlePostSlice'
import { useState } from 'react'
import ShareTo from './ShareTo'

const shareToData = [
  {
    id: 1,
    icon: <FaFacebook />,
    text: 'Facebook',
  },
  {
    id: 2,
    icon: <FaTwitter />,
    text: 'Twitter',
  },
  {
    id: 3,
    icon: <FaInstagram />,
    text: 'Instagram',
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    text: 'LinkedIn',
  },
]

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
  const [shareIsOpen, setShareIsOpen] = useState(false)

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
          {likes.length} <span> likes</span>
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
        <span>
          {commentsIsLoading ? 0 : comments.length} <span>Comments</span>
        </span>
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
      <article>
        <span onClick={() => setShareIsOpen(!shareIsOpen)}>
          <FaShareAlt />
        </span>
        {shareIsOpen && (
          <aside>
            {shareToData.map((share) => {
              return <ShareTo key={share.id} {...share} post={post} />
            })}
          </aside>
        )}
      </article>
    </div>
  )
}
export default PostActions
