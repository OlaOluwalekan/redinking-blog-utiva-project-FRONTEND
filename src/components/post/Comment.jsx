import { useEffect } from 'react'
import { useState } from 'react'
import customFetch from '../../utils/axios'
import { Link } from 'react-router-dom'
import moment from 'moment'
import PostActions from './PostActions'
import CommentActions from './CommentActions'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import reactParser from 'html-react-parser'
import styles from '../../css/post.module.css'

const Comment = ({
  content,
  commentedBy,
  createdAt,
  likes,
  _id,
  commentingTo,
}) => {
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(false)
  const [replyIsOpen, setReplyIsOpen] = useState(false)
  const date = moment(createdAt).format('MMMM DD YYYY')

  const viewUser = async () => {
    try {
      setLoading(true)
      const { data } = await customFetch(`user/view/${commentedBy}`)
      setCreator(data.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    viewUser()
  }, [])

  const module = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], ['image']],
  }

  return (
    <div>
      <article>
        <img src={loading ? '' : creator?.profileImage} alt='photo' />
        <article>
          <Link to={`/view/${creator?.username}`}>
            {loading ? '' : creator?.username}
          </Link>
          <p>{date}</p>
        </article>
      </article>
      <section className={styles.comment}>{reactParser(content)}</section>
      <CommentActions
        likes={likes}
        _id={_id}
        postId={commentingTo}
        handleOpenReply={() => setReplyIsOpen(!replyIsOpen)}
      />
      {replyIsOpen && (
        <form>
          <ReactQuill modules={module} theme='snow' />
          <article>
            <button>Send</button>
          </article>
        </form>
      )}
    </div>
  )
}
export default Comment
