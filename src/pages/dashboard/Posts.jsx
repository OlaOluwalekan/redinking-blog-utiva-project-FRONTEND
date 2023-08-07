import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../../features/user/userSlice'
import PopularPostBrief from '../../components/home/PostBrief'
import styles from '../../css/user-post.module.css'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  deletePost,
  setEditId,
  toggleEditMode,
} from '../../features/single-post/singlePostSlice'

const Posts = () => {
  const { posts, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPosts())
    document.title = `RedInking | You - Posts`
  }, [])

  return (
    <div className={styles.main}>
      <div>
        {!isLoading &&
          posts.map((post) => {
            return (
              <section key={post?._id}>
                <PopularPostBrief
                  title={post?.title}
                  createdBy={post?.createdBy}
                  image={post?.image}
                  tags={post?.tags}
                  slug={post?.slug}
                />
                <article>
                  <Link
                    to='/write'
                    onClick={() => {
                      dispatch(setEditId(post?.slug))
                      dispatch(toggleEditMode(true))
                    }}
                  >
                    <FaEdit />
                  </Link>
                  <span
                    onClick={async () => {
                      await dispatch(deletePost(post?._id))
                      dispatch(getUserPosts())
                    }}
                  >
                    <FaTrash />
                  </span>
                </article>
              </section>
            )
          })}
      </div>
    </div>
  )
}
export default Posts
