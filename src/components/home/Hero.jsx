import { useSelector } from 'react-redux'
import styles from '../../css/home.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  const { darkMode } = useSelector((store) => store.user)

  return (
    <div className={darkMode ? `${styles.hero} ${styles.dark}` : styles.hero}>
      <img
        src='https://res.cloudinary.com/dyyoorpns/image/upload/v1688895314/RedInking/Static%20Images/Hero/redinking_hero_-_red0_-_MOBILE_uersrw.png'
        alt='hero banner'
      />
      <section>
        <p>
          Have you <span className={styles.strike}>read</span>{' '}
          <span className={styles.red}>red</span> this{' '}
          <span className={styles.ink}>ink</span>?
        </p>

        <h3>
          From programming to crypto-currencies; from cooking recipe to health
          talk;{' '}
          <span>
            Here is a blogging platform you will find anything you ever needed
          </span>
        </h3>

        <article>
          <Link to='/auth/login'>Login</Link>
          <Link to='/auth/register'>Get Started</Link>
        </article>
      </section>
    </div>
  )
}
export default Hero
