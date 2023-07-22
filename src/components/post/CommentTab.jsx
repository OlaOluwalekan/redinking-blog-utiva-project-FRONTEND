import { useDispatch, useSelector } from 'react-redux'
import styles from '../../css/post.module.css'
import CommentsList from './CommentsList'
import LikesList from './LikesList'
import {
  toggleCommentTab,
  toggleTab,
} from '../../features/single-post/singlePostSlice'

const CommentTab = () => {
  const { commentTabIsOpen, tab, post } = useSelector(
    (store) => store.singlePost
  )
  const dispatch = useDispatch()

  const handleOverlayClicked = (e) => {
    if (e.target.className.includes('overlay')) {
      dispatch(toggleCommentTab(false))
    }
  }

  return (
    <div
      className={
        commentTabIsOpen
          ? `${styles['overlay']} ${styles.open}`
          : `${styles['overlay']}`
      }
      onClick={handleOverlayClicked}
    >
      <div
        className={
          commentTabIsOpen
            ? `${styles['comments-tab']} ${styles.open}`
            : `${styles['comments-tab']}`
        }
      >
        <header>
          <p
            onClick={() => dispatch(toggleTab('comment'))}
            style={{
              borderBottom:
                tab === 'comment' ? '2px solid var(--purpleBlue)' : 'unset',
              color:
                tab === 'comment' ? 'var(--purpleBlue)' : 'var(--greyishWhite)',
            }}
          >
            Comments
          </p>
          <p
            onClick={() => dispatch(toggleTab('like'))}
            style={{
              borderBottom:
                tab === 'like' ? '2px solid var(--purpleBlue)' : 'unset',
              color:
                tab === 'like' ? 'var(--purpleBlue)' : 'var(--greyishWhite)',
            }}
          >
            Likes{' '}
            <span style={{ opacity: tab === 'like' ? '1' : '0.3' }}>
              {post.likes.length}
            </span>
          </p>
        </header>
        {tab === 'comment' ? <CommentsList /> : <LikesList />}
      </div>
    </div>
  )
}
export default CommentTab
