import { Link, useNavigate } from 'react-router-dom'
import styles from '../css/navbar.module.css'
import { FaBars, FaMoon, FaSun, FaTimes, FaUserCircle } from 'react-icons/fa'
import { ImBookmarks, ImProfile } from 'react-icons/im'
import { TfiHelpAlt, TfiSettings, TfiWrite } from 'react-icons/tfi'
import { MdPolicy } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeNav,
  logOut,
  openNav,
  toggleDarkMode,
  toggleUserMenu,
} from '../features/user/userSlice'
import UserMenuItems from './UserMenuItems'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { navIsOpen, darkMode, user, userMenuIsOpen } = useSelector(
    (store) => store.user
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <header
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
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
          onClick={() => dispatch(closeNav())}
        >
          <section>
            {/* LOGO */}
            {navIsOpen && (
              <Link to='/' onClick={() => dispatch(closeNav())}>
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
              {!user && <Link to='/auth/login'>Sign In</Link>}
              {!user && <Link to='/auth/register'>Get Started</Link>}
            </article>
          </section>
        </nav>

        {/* TOGGLE DARK MODE */}
        <div>
          <article
            onClick={() => dispatch(toggleDarkMode())}
            className={darkMode ? styles.dark : styles.light}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </article>

          {/* USER MENU */}
          {user && (
            <div className={darkMode ? styles.dark : styles.light}>
              <span onClick={() => dispatch(toggleUserMenu())}>
                {/* <FaUserCircle /> */}
                <img src={user.user.profileImage} alt='profile image' />
              </span>
            </div>
          )}
          {userMenuIsOpen && (
            <aside onClick={(e) => dispatch(toggleUserMenu(false))}>
              <aside className={darkMode ? styles.dark : styles.light}>
                <UserMenuItems
                  path={`/${user?.user.username}/`}
                  text='Profile'
                  icon={<ImProfile />}
                />
                <UserMenuItems
                  path={`/${user?.user.username}/bookmarks`}
                  text='Bookmarks'
                  icon={<ImBookmarks />}
                />
                <UserMenuItems
                  path={`/${user?.user.username}/posts`}
                  text='My Posts'
                  icon={<TfiWrite />}
                />
                <hr />
                <UserMenuItems
                  path='/settings'
                  text='Settings'
                  icon={<TfiSettings />}
                />
                <UserMenuItems path='/help' text='Help' icon={<TfiHelpAlt />} />
                <UserMenuItems
                  path='/privacy'
                  text='Terms & Policy'
                  icon={<MdPolicy />}
                />
                <hr />
                <button
                  onClick={(e) => {
                    toast.success('logging you out...')
                    dispatch(toggleUserMenu(false))
                    navigate('/')
                    setTimeout(() => {
                      dispatch(logOut())
                    }, 500)
                    e.stopPropagation()
                  }}
                >
                  <span>
                    <BiLogOut />
                  </span>
                  <span>Logout</span>
                </button>
              </aside>
            </aside>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
