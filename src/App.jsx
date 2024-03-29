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
import Followers from './pages/dashboard/Followers'
import Following from './pages/dashboard/Following'
import ProtectedRoute from './pages/ProtectedRoute'
import PostDetails from './pages/PostDetails'
import View from './pages/View'
import { interests } from './interests-data'
import Privacy from './pages/Privacy'
import CreatorProfile from './pages/view/CreatorProfile'
import CreatorPosts from './pages/view/CreatorPosts'
import CreatorFollowers from './pages/view/CreatorFollowers'
import CreatorFollowing from './pages/view/CreatorFollowing'
import Settings from './pages/Settings'
import Help from './pages/Help'

const App = () => {
  const { darkMode } = useSelector((store) => store.user)
  // const newInterest = [...new Set(interests)]
  // console.log('new: ' + newInterest.length)
  // console.log('original: ' + interests.length)

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
              <Route path='followers' element={<Followers />} />
              <Route path='following' element={<Following />} />
            </Route>
            <Route
              path='write'
              element={
                <ProtectedRoute>
                  <Write />
                </ProtectedRoute>
              }
            />
            <Route path='posts/:postSlug' element={<PostDetails />} />
            <Route path='view/:creator' element={<View />}>
              <Route index element={<CreatorProfile />} />
              <Route path='posts' element={<CreatorPosts />} />
              <Route path='followers' element={<CreatorFollowers />} />
              <Route path='following' element={<CreatorFollowing />} />
            </Route>
            <Route path='privacy' element={<Privacy />} />
            <Route path='settings' element={<Settings />} />
            <Route path='help' element={<Help />} />
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
