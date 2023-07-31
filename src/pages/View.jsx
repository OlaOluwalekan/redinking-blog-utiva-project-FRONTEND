import { Link, useNavigate, useParams } from 'react-router-dom'
import customFetch from '../utils/axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../css/view.module.css'
import Loading from '../components/Loading'
import { BsPeopleFill } from 'react-icons/bs'
import { followCreator, viewUser } from '../features/user/userSlice'
import { handleFollowCreator } from '../utils/actions'

const View = () => {
  const { creator: id } = useParams()
  const { darkMode, user, creator, isLoading } = useSelector(
    (store) => store.user
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFollow = async () => {
    if (!user) {
      navigate('/auth/login')
      return
    }
    await handleFollowCreator(
      user?.user.following,
      creator?.followers,
      user?.user._id,
      creator?._id,
      dispatch
    )
    dispatch(viewUser(id))
  }

  // console.log(creator)

  // const viewUser = async () => {
  //   try {
  //     setLoading(true)
  //     const { data } = await customFetch(`user/view/${id}`)
  //     setCreator(data.user)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    dispatch(viewUser(id))
  }, [])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <section>
          <article>
            <img src={creator?.profileImage} alt='photo' />
          </article>
          <div>
            <h2>{`${creator?.firstName} ${creator?.lastName}`}</h2>
            <h3>{creator?.username}</h3>
            <button onClick={handleFollow}>
              {user && user?.user.following.includes(creator?._id)
                ? 'Unfollow'
                : 'Follow'}
            </button>
            <article>
              <span>
                <BsPeopleFill />
              </span>
              <Link to={`/view/${creator?.username}/followers`}>
                {creator?.followers.length} followers
              </Link>
              <span>||</span>
              <Link to={`/view/${creator?.username}/following`}>
                {creator?.following.length} following
              </Link>
            </article>
          </div>
        </section>
      </div>
    </div>
  )
}
export default View
