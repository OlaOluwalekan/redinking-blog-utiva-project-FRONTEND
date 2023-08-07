import { useDispatch, useSelector } from 'react-redux'
import styles from '../../css/profile.module.css'
import PersonalInfoInput from '../../components/profile/PersonalInfoInput'
import { useEffect, useState } from 'react'
import Step3 from '../../components/register-login/Step3'
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { user, darkMode } = useSelector((store) => store.user)
  const [userUpdate, setUserUpdate] = useState(user?.user)
  const [interests, setInterests] = useState(userUpdate.interests)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserUpdate({ ...userUpdate, [name]: value })
  }

  const restoreDefault = (e) => {
    const name = e.currentTarget.parentElement.previousSibling.name
    const value = user.user[name]
    setUserUpdate({ ...userUpdate, [name]: value })
  }

  useEffect(() => {
    document.title = `RedInking | You`
  }, [])

  return (
    <div
      className={darkMode ? `${styles.main} ${styles.dark}` : `${styles.main}`}
    >
      <div>
        <PersonalInfoInput
          type='email'
          value={userUpdate.email}
          name='email'
          unchangeable={true}
          labelText='Email'
        />
        <PersonalInfoInput
          type='text'
          name='username'
          value={userUpdate.username}
          handleChange={handleChange}
          restoreDefault={restoreDefault}
          labelText='Username'
          required={true}
        />
        <PersonalInfoInput
          type='text'
          name='firstName'
          value={userUpdate.firstName}
          handleChange={handleChange}
          restoreDefault={restoreDefault}
          labelText='First Name'
          required={true}
        />
        <PersonalInfoInput
          type='text'
          name='lastName'
          value={userUpdate.lastName}
          handleChange={handleChange}
          restoreDefault={restoreDefault}
          labelText='Last Name'
          required={false}
        />
        <section>
          <Step3
            selectedInterests={interests}
            setSelectedInterests={setInterests}
          />
          <article>
            <button
              onClick={() => {
                dispatch(
                  updateUser({
                    id: user?.user._id,
                    data: { interests },
                  })
                )
              }}
            >
              Update Interests
            </button>
          </article>
        </section>
      </div>
    </div>
  )
}
export default Profile
