import Hero from '../components/home/Hero'
import styles from '../css/home.module.css'
import Popular from '../components/home/Popular'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setEditId } from '../features/single-post/singlePostSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setEditId(''))
  }, [])

  return (
    <div className={styles.main}>
      <Hero />
      <Popular />
    </div>
  )
}
export default Home
