import { useSelector } from 'react-redux'
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user)
  const { dashboard } = useParams()
  const location = useLocation()

  if (!user) {
    return <Navigate to='/auth/login' />
  }

  if (location.pathname !== '/write' && user?.user.username !== dashboard) {
    return <Navigate to={`/view/${dashboard}`} />
  }

  return <div>{children}</div>
}
export default ProtectedRoute
