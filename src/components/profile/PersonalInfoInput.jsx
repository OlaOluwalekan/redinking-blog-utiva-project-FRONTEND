import { useState } from 'react'
import styles from '../../css/profile.module.css'
import { FaCheckCircle, FaEdit, FaTimesCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { updateUser } from '../../features/user/userSlice'
import { toast } from 'react-toastify'

const PersonalInfoInput = ({
  type,
  value,
  name,
  handleChange,
  unchangeable,
  restoreDefault,
  labelText,
  required,
}) => {
  const [onEdit, setOnEdit] = useState(false)
  const focusInput = useRef(null)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleEditClicked = () => {
    setOnEdit(true)
    focusInput.current.focus()
  }

  const handleCancelClicked = (e) => {
    setOnEdit(false)
    restoreDefault(e)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setOnEdit(false)
    if (user?.user[name] === value) {
      toast.info('no changes made')
      return
    }
    if (required && value === '') {
      toast.error(`${labelText} cannot be empty`)
      setOnEdit(true)
      focusInput.current.focus()
      return
    }
    dispatch(updateUser({ id: user?.user._id, data: { [name]: value } }))
    // toast.success(`${labelText} updated successfully`)
  }

  return (
    <form className={styles['user-update-input']} onSubmit={handleSubmit}>
      <label htmlFor={name}>{labelText}</label>
      <div>
        <input
          type={type}
          value={value}
          name={name}
          id={name}
          readOnly={!onEdit}
          onChange={handleChange}
          style={{
            cursor: unchangeable && 'not-allowed',
            opacity: unchangeable && 0.5,
          }}
          ref={focusInput}
        />
        {!unchangeable && (
          <article>
            {onEdit ? (
              <button type='submit'>
                <FaCheckCircle />
              </button>
            ) : (
              <span onClick={handleEditClicked}>
                <FaEdit />
              </span>
            )}

            {onEdit && (
              <span onClick={handleCancelClicked}>
                <FaTimesCircle />
              </span>
            )}
          </article>
        )}
      </div>
    </form>
  )
}
export default PersonalInfoInput
