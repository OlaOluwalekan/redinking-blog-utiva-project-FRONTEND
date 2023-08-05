import { useState } from 'react'
import customFetch from '../../utils/axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCommentTab } from '../../features/single-post/singlePostSlice'

const Liker = ({ likerId }) => {
  const [liker, setLiker] = useState(null)
  const [loading, setLoading] = useState(false)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const viewLiker = async () => {
    try {
      setLoading(true)
      const { data } = await customFetch(`user/view/${likerId}`)
      setLiker(data.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    viewLiker()
  }, [])

  return (
    <article>
      <img src={loading ? '' : liker?.profileImage} alt='photo' />{' '}
      <Link
        to={`/view/${liker?.username}`}
        onClick={() => dispatch(toggleCommentTab())}
      >
        {loading
          ? ''
          : user?.user.username === liker?.username
          ? 'You'
          : liker?.username}
      </Link>
    </article>
  )
}
export default Liker
