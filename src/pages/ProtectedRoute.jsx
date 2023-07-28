import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user)
  const { dashboard } = useParams()

  console.log(dashboard)

  if (!user) {
    return <Navigate to='/auth/login' />
  }

  if (user?.user.username !== dashboard) {
    return <Navigate to={`/view/${dashboard}`} />
  }

  return <div>{children}</div>
}
export default ProtectedRoute
