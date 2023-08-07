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
    if (location.pathname === '/write') {
      return <Navigate to='/auth/login' />
    } else {
      return <Navigate to={`/view/${dashboard}`} />
    }
  }

  // console.log(dashboard, user);
  if (location.pathname !== '/write' && user?.user.username !== dashboard) {
    return <Navigate to={`/view/${dashboard}`} />
  }

  return <div>{children}</div>
}
export default ProtectedRoute
