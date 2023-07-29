import { Link } from 'react-router-dom'
import customFetch from '../../utils/axios'
import { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import styles from '../../css/home.module.css'

const PostBrief = ({ _id, title, createdBy, image, tags, slug }) => {
  const [creator, setCreator] = useState(null)
  const [loading, setLoading] = useState(false)

  const viewUser = async () => {
    try {
      setLoading(true)
      const { data } = await customFetch(`user/view/${createdBy}`)
      setCreator(data.user)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    viewUser()
  }, [])

  return (
    <div className={styles['popular-brief']}>
      <img src={image} alt={title} />
      <aside></aside>
      <section>
        <Link to={`/posts/${slug}`}>{HTMLReactParser(title)}</Link>
        <article>
          <img src={loading ? '' : creator?.profileImage} alt='photo' />
          <article>
            <p>{loading ? '' : creator?.username}</p>
            <p>
              {tags.map((tag, i) => {
                return <span key={i}>{tag}</span>
              })}
            </p>
          </article>
        </article>
      </section>
    </div>
  )
}
export default PostBrief
