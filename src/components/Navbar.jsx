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
        {/*OPEN NAV BUTTON  */}
        <span onClick={() => dispatch(openNav())}>
          <FaBars />
        </span>

        {/* LOGO */}
        <Link to='/'>
          <h2>
            Red<span>Inking</span>
          </h2>
        </Link>

        {/* NAV ITEMS */}
        <nav
          className={`${navIsOpen ? styles.open : ''} ${
            darkMode ? styles.dark : ''
          }`}
        >
          {/* LOGO */}
          {navIsOpen && (
            <Link to='/'>
              <h2>
                Red<span>Inking</span>
              </h2>
            </Link>
          )}

          {/* CLOSE NAV BUTTON */}
          {navIsOpen && (
            <span onClick={() => dispatch(closeNav())}>
              <FaTimes />
            </span>
          )}

          {/* NAV LINKS */}
          <article onClick={() => dispatch(closeNav())}>
            <Link to='/about'>About</Link>
            <Link to='/write'>Write</Link>
            <Link to='/auth/login'>Sign In</Link>
            <Link to='/auth/register'>Get Started</Link>
          </article>
        </nav>

        {/* TOGGLE DARK MODE */}
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
