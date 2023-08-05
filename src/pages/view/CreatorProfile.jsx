import { useSelector } from 'react-redux'
import ProfileInfo from '../../components/view/ProfileInfo'
import styles from '../../css/creator-profile.module.css'

const CreatorProfile = () => {
  const { creator, darkMode } = useSelector((store) => store.user)

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <ProfileInfo
        title='Name'
        content={`${creator?.firstName} ${creator?.lastName}`}
      />
      <ProfileInfo
        title='About'
        content={creator?.about || 'No about information'}
      />
      <ProfileInfo title='Email' content={creator?.email} />
    </div>
  )
}
export default CreatorProfile
