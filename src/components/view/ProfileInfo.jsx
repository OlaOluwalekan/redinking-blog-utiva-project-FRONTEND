import { useSelector } from 'react-redux'
import Loading from '../Loading'

const ProfileInfo = ({ title, content }) => {
  const { isLoading } = useSelector((store) => store.user)

  return (
    <article>
      <h5>{isLoading ? '' : title}</h5>
      <p>{isLoading ? '' : content}</p>
    </article>
  )
}
export default ProfileInfo
