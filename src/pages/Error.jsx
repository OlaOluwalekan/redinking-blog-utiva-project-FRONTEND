import { useEffect } from 'react'
import styles from '../css/error.module.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Error = () => {
  const { darkMode } = useSelector((store) => store.user)

  useEffect(() => {
    document.title = `RedInking | Error`
  }, [])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <p>Oops!</p>
        <article>
          <h3>404 - PAGE NOT FOUND</h3>
          <p>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable
          </p>
        </article>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  )
}
export default Error
