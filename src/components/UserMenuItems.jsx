import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleUserMenu } from '../features/user/userSlice'

const UserMenuItems = ({ icon, text, path }) => {
  const dispatch = useDispatch()

  return (
    <Link
      to={path}
      onClick={(e) => {
        dispatch(toggleUserMenu())
        e.stopPropagation()
      }}
    >
      <span>{icon}</span>
      {text}
    </Link>
  )
}
export default UserMenuItems
