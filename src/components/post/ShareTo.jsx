const ShareTo = ({ icon, text, post }) => {
  const isWebShareSupported = () => {
    return 'share' in navigator
  }

  console.log(isWebShareSupported())

  const handleShare = async (post) => {
    // if (isWebShareSupported()) {
    //   try {
    //     await navigator.share({
    //       title: post.title,
    //       text: post.content,
    //       url: post.slug,
    //     })
    //   } catch (error) {
    //     console.error('Error sharing', error)
    //   }
    // } else {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        post.title + '' + post.slug
      )}`
    )
    // }
  }

  return (
    <span onClick={() => handleShare(post)}>
      {icon} {text}
    </span>
  )
}
export default ShareTo
