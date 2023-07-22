import { useSelector } from 'react-redux'
import Liker from './Liker'
import styles from '../../css/post.module.css'

const LikesList = () => {
  const { post } = useSelector((store) => store.singlePost)

  return (
    <div className={styles['like-list']}>
      {post.likes.map((like) => {
        return <Liker key={like} likerId={like} />
      })}
    </div>
  )
}
export default LikesList
