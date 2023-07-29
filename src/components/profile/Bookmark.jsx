import { useEffect } from 'react'
import PopularPostBrief from '../home/PostBrief'
import customFetch from '../../utils/axios'
import { useState } from 'react'
import Loading from 'react-loading'
import { FaBookmark } from 'react-icons/fa'
import { handleBookmarkPost } from '../../utils/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Bookmark = ({ slug }) => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: '',
    createdBy: '',
    image: '',
    tags: [],
  })
  const [isLoading, setIsLoading] = useState(false)

  const getPostBySlug = async () => {
    try {
      setIsLoading(true)
      const { data } = await customFetch(`post/slug/${slug}`)
      setPost(data.post)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getPostBySlug()
  }, [])

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <PopularPostBrief
          title={post?.title}
          createdBy={post?.createdBy}
          image={post?.image}
          tags={post?.tags}
          slug={slug}
        />
      )}
      {!isLoading && (
        <article
          onClick={() =>
            handleBookmarkPost(
              user,
              slug,
              user?.user.bookmarks,
              dispatch,
              navigate
            )
          }
          style={{
            color: user?.user.bookmarks.includes(slug)
              ? 'var(--purpleBlue)'
              : 'unset',
          }}
        >
          <FaBookmark />
        </article>
      )}
    </div>
  )
}
export default Bookmark
