import { likeComment, likePost } from '../features/single-post/singlePostSlice'
import customFetch from './axios'

export const handleLike = (user, likes, _id, dispatch, navigate) => {
  if (!user) {
    navigate('/auth/login')
    return
  }
  let newLikes
  if (likes.includes(user.user._id)) {
    newLikes = likes.filter((like) => {
      return like !== user.user._id
    })
  } else {
    newLikes = [...likes, user.user._id]
  }
  dispatch(likePost({ postId: _id, likes: newLikes }))
}

export const handleLikeComment = (
  user,
  likes,
  _id,
  dispatch,
  navigate,
  postId
) => {
  if (!user) {
    navigate('/auth/login')
    return
  }
  let newLikes
  if (likes.includes(user.user._id)) {
    newLikes = likes.filter((like) => {
      return like !== user.user._id
    })
  } else {
    newLikes = [...likes, user.user._id]
  }
  dispatch(likeComment({ commentId: _id, postId: postId, likes: newLikes }))
}

export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
