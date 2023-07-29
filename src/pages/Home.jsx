import Hero from '../components/home/Hero'
import styles from '../css/home.module.css'
import Popular from '../components/home/Popular'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEditId } from '../features/single-post/singlePostSlice'
import NewestPosts from '../components/home/NewestPosts'
import UserInterestPosts from '../components/home/UserInterestPosts'

const Home = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user)

  useEffect(() => {
    dispatch(setEditId(''))
  }, [])

  return (
    <div className={styles.main}>
      <Hero />
      <NewestPosts />
      {user && <UserInterestPosts />}
      <Popular />
    </div>
  )
}
export default Home
