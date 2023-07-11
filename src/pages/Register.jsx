import { useState } from 'react'
import styles from '../css/register.module.css'
import Step1 from '../components/register-login/Step1'
import Step2 from '../components/register-login/Step2'
import Step3 from '../components/register-login/Step3'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { confirmCode, registerUser } from '../features/user/userSlice'

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })
  const [verificationCode, setVerificationCode] = useState('')
  const { darkMode } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (currentStep === 1) {
      const { firstName, username, email, password } = values
      if (!firstName || !username || !email || !password) {
        console.log('please fill all required fields')
        return
      }
      const {
        payload: { user },
      } = await dispatch(registerUser(values))
      if (user) {
        setCurrentStep(2)
      }
    } else if (currentStep === 2) {
      if (!verificationCode) {
        console.log('input code sent to your mail')
        return
      }
      const {
        payload: { user },
      } = await dispatch(confirmCode({ verificationCode }))
      if (user) {
        setCurrentStep(3)
      }
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
          <Step3 />
        )}
        <article>
          {currentStep !== 1 && (
            <button>{currentStep === 2 ? 'Resend Code' : 'Skip'}</button>
          )}
          <button
            type='submit'
            style={{ width: currentStep === 1 ? '100%' : 'unset' }}
          >
            {currentStep === 1
              ? 'Register'
              : currentStep === 2
              ? 'Verify'
              : 'Finish'}
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
