import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading'
import Comment from './Comment'
import styles from '../../css/post.module.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {
  createComment,
  getPostComments,
} from '../../features/single-post/singlePostSlice'

const CommentsList = () => {
  const [value, setValue] = useState('')
  const { comments, commentsIsLoading, post } = useSelector(
    (store) => store.singlePost
  )
  const dispatch = useDispatch()

  const module = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['image', 'link'],
    ],
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    dispatch(createComment({ id: post.slug, content: value }))
    dispatch(getPostComments(post.slug))
    console.log(value)
  }

  return (
    <div className={styles['comment-list']}>
      <form
        onSubmit={handleSubmitComment}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <ReactQuill
          modules={module}
          theme='snow'
          value={value}
          onChange={setValue}
        />
        <article>
          <button type='submit'>Send</button>
        </article>
      </form>
      <section>
        {commentsIsLoading ? (
          <Loading />
        ) : (
          comments.map((comment) => {
            return <Comment key={comment._id} {...comment} />
          })
        )}
      </section>
    </div>
  )
}
export default CommentsList
