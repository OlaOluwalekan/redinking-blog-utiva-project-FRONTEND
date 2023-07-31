import { toast } from 'react-toastify'
import { likeComment, likePost } from '../features/single-post/singlePostSlice'
import { bookmarkPost, followCreator } from '../features/user/userSlice'
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

export const handleBookmarkPost = (
  user,
  postId,
  bookmarks,
  dispatch,
  navigate
) => {
  if (!user) {
    navigate('/auth/login')
    return
  }
  let newBookmarks
  if (bookmarks.includes(postId)) {
    newBookmarks = bookmarks.filter((bookmark) => {
      return bookmark !== postId
    })
    toast.success('Post removed from bookmarks')
  } else {
    newBookmarks = [...bookmarks, postId]
    toast.success('Post added to bookmarks')
  }
  dispatch(bookmarkPost({ data: { bookmarks: newBookmarks } }))
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

export const handleFollowCreator = async (
  userFollowing,
  creatorFollowers,
  userId,
  creatorId,
  dispatch
) => {
  let newUserFollowing
  let newCreatorFollowers
  if (userFollowing.includes(creatorId)) {
    newUserFollowing = userFollowing.filter((following) => {
      return following !== creatorId
    })
  } else {
    newUserFollowing = [...userFollowing, creatorId]
  }
  if (creatorFollowers.includes(userId)) {
    newCreatorFollowers = creatorFollowers.filter((follower) => {
      return follower !== userId
    })
  } else {
    newCreatorFollowers = [...creatorFollowers, userId]
  }
  dispatch(followCreator({ following: newUserFollowing }))
  const { data } = await customFetch.put(`/user/follow/${creatorId}`, {
    followers: newCreatorFollowers,
  })
}
