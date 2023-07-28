import { useSelector } from 'react-redux'
import styles from '../css/footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { user, darkMode } = useSelector((store) => store.user)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <Link to='/'>
          <h2>
            Red<span>Inking</span>
          </h2>
        </Link>
        <article>
          <Link to='/about'>About</Link>
          <Link to='/write'>Write</Link>
          {!user && <Link to='/auth/login'>Sign In</Link>}
          {!user && <Link to='/auth/register'>Get Started</Link>}
        </article>
      </div>
    </div>
  )
}
export default Footer
