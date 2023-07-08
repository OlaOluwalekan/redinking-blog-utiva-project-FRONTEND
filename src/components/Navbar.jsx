import { Link } from 'react-router-dom'
import styles from '../css/navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { closeNav, openNav } from '../features/user/userSlice'

const Navbar = () => {
  const { navIsOpen } = useSelector((store) => store.user)
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
        <nav className={navIsOpen ? styles.open : ''}>
          {navIsOpen && (
            <Link to='/'>
              <h2>
                Red<span>Inking</span>
              </h2>
            </Link>
          )}
          {navIsOpen && (
            <span onClick={() => dispatch(closeNav())}>
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
      </div>
    </header>
  )
}

export default Navbar
