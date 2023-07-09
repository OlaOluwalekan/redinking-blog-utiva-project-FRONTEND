import { useDispatch } from 'react-redux'
import Hero from '../components/home/Hero'
import styles from '../css/home.module.css'
import { useEffect } from 'react'
import { getPosts } from '../features/post/postSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className={styles.main}>
      <Hero />
    </div>
  )
}
export default Home
