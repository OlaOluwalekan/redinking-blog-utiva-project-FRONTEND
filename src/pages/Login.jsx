import { useEffect, useState } from 'react'
import Input from '../components/register-login/Input'
import styles from '../css/login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, setCurrentStep } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import ReactLoading from 'react-loading'

const Login = () => {
  const [values, setValues] = useState({
    emailOrUsername: '',
    userPassword: '',
  })
  const { darkMode, user, isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = async (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { emailOrUsername, userPassword } = values
    if (!emailOrUsername || !userPassword) {
      toast.error('please fill all required fields')
      return
    }
    dispatch(loginUser(values))
  }

  useEffect(() => {
    if (user) {
      if (user.user.emailVerified) {
        setTimeout(() => {
          navigate('/')
        }, 2000)
      } else {
        dispatch(setCurrentStep(2))
        setTimeout(() => {
          navigate('/auth/register')
        }, 1000)
      }
    }
  }, [user])

  return (
    <div className={styles.main}>
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className={darkMode ? styles.dark : ''}>
        <section>
          <Input
            type='text'
            name='emailOrUsername'
            labelText='Email/Username'
            value={values.emailOrUsername}
            handleChange={handleChange}
          />
          <Input
            type='password'
            name='userPassword'
            labelText='Password'
            value={values.userPassword}
            handleChange={handleChange}
          />
        </section>
        <button
          type='submit'
          style={{
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.5 : 1,
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            <ReactLoading
              type='spin'
              height={25}
              width={25}
              className='loading'
            />
          ) : (
            'Login'
          )}
        </button>
        <p>
          Don't have an account? <Link to='/auth/register'>Register Now</Link>
        </p>
      </form>
    </div>
  )
}
export default Login
