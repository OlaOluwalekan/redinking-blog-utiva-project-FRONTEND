import { useEffect, useState } from 'react'
import customFetch from '../../utils/axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleFollowCreator } from '../../utils/actions'

const CreatorFollower = ({ userId, creatorId }) => {
  const [follower, setFollower] = useState(null)
  const { user } = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = async () => {
    if (!user) {
      navigate('/auth/login')
      return
    }
    await handleFollowCreator(
      user?.user.following,
      follower?.followers,
      user?.user._id,
      follower?._id,
      dispatch
    )
    viewUser()
  }

  const viewUser = async () => {
    try {
      // setLoading(true)
      const { data } = await customFetch(`user/view/${userId}`)
      setFollower(data.user)
      // setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    viewUser()
  }, [])

  // console.log(`${follower?.username}: ${follower?._id} ${userId}`)
  // if (follower) {
  //   console.log(`${follower?.username}: ${follower?._id}`)
  //   console.log(user.user.following)
  // }

  return (
    <section>
      <img src={follower?.profileImage} alt={follower?.username} />
      <article>
        <Link to={`/view/${follower?.username}/`}>
          {`${follower?.firstName} ${follower?.lastName}`}{' '}
          <span>{follower?.username}</span>
        </Link>
        {!user ? (
          <button>Follow</button>
        ) : (
          user?.user._id !== follower?._id && (
            <button onClick={handleClick}>
              {user?.user.following.includes(follower?._id)
                ? 'Unfollow'
                : 'Follow'}
            </button>
          )
        )}
      </article>
    </section>
  )
}
export default CreatorFollower
