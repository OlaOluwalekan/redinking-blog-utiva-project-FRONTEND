import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import styles from '../css/write.module.css'
import { FaUpload } from 'react-icons/fa'
import { convertToBase64 } from '../utils/actions'
import TagsSelect from '../components/write/TagsSelect'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  createPost,
  getPostBySlug,
  resetPost,
  setEditId,
  updatePost,
} from '../features/single-post/singlePostSlice'
import ReactLoading from 'react-loading'

const Write = () => {
  const { editId, post, isLoading, inEditMode } = useSelector(
    (store) => store.singlePost
  )

  // SETTING WRITE FIELD VALUES BASE ON IS EDITING
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [content, setContent] = useState('')
  const [postImage, setPostImage] = useState('')
  const [tags, setTags] = useState([])

  const { darkMode, commentIsLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  // console.log(post)

  useEffect(() => {
    if (isLoading) {
      setTitle('')
      setSubTitle('')
      setContent(''), setPostImage(''), setTags([])
    } else {
      if (editId) {
        setTitle(post?.title)
        setSubTitle(post?.subTitle)
        setContent(post?.content)
        setPostImage(post?.image)
        setTags(post?.tags)
      }
    }
  }, [isLoading])

  const titleModule = {
    toolbar: ['bold', 'italic', 'underline', 'strike'],
  }

  const contentModule = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      ['blockquote', 'code-block'],
      ['image', 'link'],
    ],
  }

  const resetEditId = () => {
    dispatch(setEditId(''))
    dispatch(resetPost())
  }

  useEffect(() => {
    if (editId) {
      dispatch(getPostBySlug(editId))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('popstate', resetEditId)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = { title, subTitle, content, image: postImage, tags }
    if (!title) {
      toast.error(`Please provide a title for your post`)
      return
    }
    if (!postImage) {
      toast.error(`You need to add an image for your post`)
      return
    }
    if (tags.length < 2) {
      toast.error(`You need to add at least 2 tags`)
      return
    }
    if (!content) {
      toast.error(`Your post needs some content`)
      return
    }
    if (inEditMode) {
      dispatch(updatePost({ id: post?._id, value }))
      resetEditId()
    } else {
      dispatch(createPost(value))
    }
    setTitle('')
    setSubTitle('')
    setContent('')
    setPostImage('')
    setTags([])
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setPostImage(base64)
  }

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <h2>{inEditMode ? 'Update' : 'Create'} Your Post</h2>
        <form onSubmit={handleSubmit}>
          {/* TITLE */}
          <article>
            <label htmlFor='title'>
              Post Title <span>*</span>
            </label>
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </article>

          {/* SUB TITLE */}
          <article>
            <label htmlFor='subtitle'>Post Subtitle</label>
            <ReactQuill
              theme='snow'
              modules={titleModule}
              id='subtitle'
              value={subTitle}
              onChange={setSubTitle}
            />
          </article>

          {/* IMAGE UPLOAD */}
          <article>
            <img
              src={
                postImage
                  ? postImage
                  : 'https://res.cloudinary.com/dyyoorpns/image/upload/v1690104992/RedInking/Static%20Images/Post/default-thumbnail.jpg'
              }
              alt='default thumbnail'
            />
            <label htmlFor='image'>
              <span>
                <FaUpload />
              </span>
            </label>
            <input
              type='file'
              name='image'
              id='image'
              accept='.jpeg, .png, .jpg'
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </article>

          <TagsSelect selectedTag={tags} setSelectedTag={setTags} />

          {/* CONTENT */}
          <article>
            <label htmlFor='content'>
              Post Content <span>*</span>
            </label>
            <ReactQuill
              theme='snow'
              modules={contentModule}
              id='content'
              value={content}
              onChange={setContent}
            />
          </article>
          <section>
            <button type='submit' disabled={commentIsLoading}>
              {isLoading ? (
                <ReactLoading
                  type='spin'
                  height={25}
                  width={25}
                  className='loading'
                />
              ) : inEditMode ? (
                'Update Post'
              ) : (
                'Create Post'
              )}
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}
export default Write
