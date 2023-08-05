import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import customFetch from '../../utils/axios'
import PostBrief from '../../components/home/PostBrief'
import styles from '../../css/creator-posts.module.css'

const CreatorPosts = () => {
  const [posts, setPosts] = useState([])
  const { creator } = useSelector((store) => store.user)

  const getCreatorPosts = async () => {
    try {
      const { data } = await customFetch(`/post/view/${creator?.username}`)
      setPosts(data.posts)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (creator) {
      getCreatorPosts()
    }
  }, [creator])

  return (
    <div className={styles.main}>
      <h3>
        {posts?.length} {posts.length < 2 ? 'post' : 'posts'} by{' '}
        <span>{creator?.username}</span>
      </h3>
      <section>
        {posts.map((post) => {
          return <PostBrief key={post?._id} {...post} />
        })}
      </section>
    </div>
  )
}
export default CreatorPosts
