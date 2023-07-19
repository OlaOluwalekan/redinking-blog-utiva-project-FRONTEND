import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/dashboard/Profile'
import Write from './pages/Write'
import Error from './pages/Error'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import SharedDashboard from './pages/dashboard/SharedDashboard'
import Bookmarks from './pages/dashboard/Bookmarks'
import Posts from './pages/dashboard/Posts'
import ProtectedRoute from './pages/ProtectedRoute'
import PostDetails from './pages/PostDetails'

const App = () => {
  const { darkMode } = useSelector((store) => store.user)

  return (
    <main className={darkMode ? 'main dark' : 'main light'}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='auth/login' element={<Login />} />
            <Route path='auth/register' element={<Register />} />
            <Route
              path=':dashboard'
              element={
                <ProtectedRoute>
                  <SharedDashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Profile />} />
              <Route path='bookmarks' element={<Bookmarks />} />
              <Route path='posts' element={<Posts />} />
            </Route>
            <Route path='write' element={<Write />} />
            <Route path='posts/:postSlug' element={<PostDetails />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
        <ToastContainer
          position='top-center'
          theme={darkMode ? 'dark' : 'light'}
          pauseOnHover={false}
          autoClose={2000}
        />
      </BrowserRouter>
    </main>
  )
}
export default App
