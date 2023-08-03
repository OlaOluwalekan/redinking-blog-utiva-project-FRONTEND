import { useDispatch, useSelector } from 'react-redux'
import styles from '../../css/home.module.css'
import { useEffect } from 'react'
import { getPosts } from '../../features/post/postSlice'
import Loading from '../Loading'
import PopularPostBrief from './PostBrief'

const Popular = () => {
  const dispatch = useDispatch()
  const { posts, isLoading } = useSelector((store) => store.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  // console.log(posts)

  return (
    <div className={styles.popular}>
      <div>
        <h2>Trending</h2>
        <section>
          {isLoading ? (
            <Loading />
          ) : (
            posts.map((post) => {
              return <PopularPostBrief key={post._id} {...post} />
            })
          )}
        </section>
      </div>
    </div>
  )
}
export default Popular
