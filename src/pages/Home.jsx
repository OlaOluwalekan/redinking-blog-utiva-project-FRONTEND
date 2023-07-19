import Hero from '../components/home/Hero'
import styles from '../css/home.module.css'
import Popular from '../components/home/Popular'

const Home = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <Popular />
    </div>
  )
}
export default Home
