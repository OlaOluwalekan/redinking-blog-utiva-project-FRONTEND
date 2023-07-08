import { Link } from 'react-router-dom'
import styles from '../css/navbar.module.css'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav, openNav, toggleDarkMode } from '../features/user/userSlice'

const Navbar = () => {
  const { navIsOpen, darkMode } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <header className={styles.main}>
      <div>
        <span onClick={() => dispatch(openNav())}>
          <FaBars />
        </span>
        <Link to='/'>
          <h2>
            Red<span>Inking</span>
          </h2>
        </Link>
        <nav
          className={`${navIsOpen ? styles.open : ''} ${
            darkMode ? styles.dark : ''
          }`}
        >
          {navIsOpen && (
            <Link to='/' /*className={darkMode ? styles.dark : ''}*/>
              <h2>
                Red<span>Inking</span>
              </h2>
            </Link>
          )}
          {navIsOpen && (
            <span
              onClick={() => dispatch(closeNav())}
              /*className={darkMode ? styles.dark : ''}*/
            >
              <FaTimes />
            </span>
          )}
          <article onClick={() => dispatch(closeNav())}>
            <Link to='/about'>About</Link>
            <Link to='/write'>Write</Link>
            <Link to='/auth/login'>Sign In</Link>
            <Link to='/auth/register'>Get Started</Link>
          </article>
        </nav>

        <article
          onClick={() => dispatch(toggleDarkMode())}
          className={darkMode ? styles.dark : styles.light}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </article>
      </div>
    </header>
  )
}

export default Navbar
