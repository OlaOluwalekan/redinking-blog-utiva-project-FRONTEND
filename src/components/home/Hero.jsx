import { useSelector } from 'react-redux'
import styles from '../../css/home.module.css'

const Hero = () => {
  const { darkMode } = useSelector((store) => store.user)

  return (
    <div className={darkMode ? `${styles.hero} ${styles.dark}` : styles.hero}>
      <img
        src='https://res.cloudinary.com/dyyoorpns/image/upload/v1688895314/RedInking/Static%20Images/Hero/redinking_hero_-_red0_-_MOBILE_uersrw.png'
        alt='hero banner'
      />
      <div></div>
    </div>
  )
}
export default Hero
