import { useEffect, useState } from 'react'
import styles from '../css/register.module.css'
import Step1 from '../components/register-login/Step1'
import Step2 from '../components/register-login/Step2'
import Step3 from '../components/register-login/Step3'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  confirmCode,
  registerUser,
  sendVerificationEmail,
  setCurrentStep,
  updateUser,
} from '../features/user/userSlice'
import { getUserFromLocalStorage } from '../utils/localStorage'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactLoading from 'react-loading'

const Register = () => {
  // const [currentStep, setCurrentStep] = useState(1)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })
  const [verificationCode, setVerificationCode] = useState('')
  const [selectedInterests, setSelectedInterests] = useState([])
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const { darkMode, user, currentStep, isLoading } = useSelector(
    (store) => store.user
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (currentStep === 1) {
      const { firstName, username, email, password } = values
      if (!firstName || !username || !email || !password) {
        toast.error('please fill all required fields')
        return
      }
      const {
        payload: { user },
      } = await dispatch(registerUser(values))
      if (user) {
        dispatch(setCurrentStep(2))
        setCount(15)
        setIsRunning(true)
      }
    } else if (currentStep === 2) {
      if (!verificationCode) {
        toast.error('input code sent to your mail')
        return
      }
      const {
        payload: { user },
      } = await dispatch(confirmCode({ verificationCode }))
      if (user) {
        // setCurrentStep(3)
        dispatch(setCurrentStep(3))
      }
    } else {
      await dispatch(
        updateUser({
          id: getUserFromLocalStorage().user._id,
          data: { interests: selectedInterests },
        })
      )
      // setCurrentStep(4)
      dispatch(setCurrentStep(4))
    }
  }

  useEffect(() => {
    if (count === 0) {
      setIsRunning(false)
    }
  }, [count])

  useEffect(() => {
    if (user && currentStep > 3) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [user, currentStep])

  const handleClick = async () => {
    if (currentStep === 2) {
      await dispatch(
        sendVerificationEmail({ email: getUserFromLocalStorage().user.email })
      )
      setCount(15)
      setIsRunning(true)
    } else {
      dispatch(setCurrentStep(4))
    }
  }

  return (
    <div className={styles.main}>
      <h2>Setup Your Account</h2>
      <form onSubmit={handleSubmit} className={darkMode ? styles.dark : ''}>
        <h5>
          {currentStep === 1
            ? 'Login Details'
            : currentStep === 2
            ? 'Verify Your Email'
            : 'Select Topics of Interest'}
        </h5>
        {currentStep === 1 ? (
          <Step1 values={values} setValues={setValues} />
        ) : currentStep === 2 ? (
          <Step2 code={verificationCode} setCode={setVerificationCode} />
        ) : (
          <Step3
            selectedInterests={selectedInterests}
            setSelectedInterests={setSelectedInterests}
          />
        )}
        <article>
          {currentStep !== 1 && (
            <button
              type='button'
              style={{
                color: darkMode
                  ? 'var(--greyishWhite)'
                  : 'var(--darkPurpleBlue)',
                cursor: isRunning ? 'not-allowed' : 'pointer',
                opacity: isRunning ? '0.5' : '1',
              }}
              onClick={handleClick}
              disabled={isRunning}
            >
              {currentStep === 2
                ? count > 0
                  ? `Resend code in ${count}s`
                  : 'Resend Code'
                : 'Skip'}
            </button>
          )}
          <button
            type='submit'
            style={{
              width: currentStep === 1 ? '100%' : 'unset',
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
            ) : currentStep === 1 ? (
              'Register'
            ) : currentStep === 2 ? (
              'Verify'
            ) : (
              'Finish'
            )}
          </button>
        </article>
        {currentStep === 1 && (
          <p>
            Already have an account? <Link to='/auth/login'>Login Now</Link>
          </p>
        )}
      </form>
    </div>
  )
}
export default Register
