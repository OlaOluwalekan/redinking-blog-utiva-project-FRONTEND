import { useSelector } from 'react-redux'
import styles from '../../css/bookmarks.module.css'
import { FaBookmark } from 'react-icons/fa'
import Bookmark from '../../components/profile/Bookmark'
import { useEffect } from 'react'

const Bookmarks = () => {
  const {
    user: {
      user: { bookmarks },
    },
    darkMode,
  } = useSelector((store) => store.user)
  // console.log(bookmarks)

  useEffect(() => {
    document.title = `RedInking | You - Bookmarks`
  }, [])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        {bookmarks.length === 0 ? (
          <article>
            <p>
              You haven't book mark any post. Click the bookmark icon{' '}
              <span>
                <FaBookmark />{' '}
              </span>
              on a post to add it
            </p>
          </article>
        ) : (
          <section>
            {bookmarks.map((bookmark) => {
              return (
                <section key={bookmark}>
                  <Bookmark slug={bookmark} />
                </section>
              )
            })}
          </section>
        )}
      </div>
    </div>
  )
}
export default Bookmarks
