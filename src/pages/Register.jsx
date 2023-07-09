import { useState } from 'react'
import Input from '../components/register-login/Input'
import styles from '../css/register.module.css'
import Step1 from '../components/register-login/Step1'
import Step2 from '../components/register-login/Step2'
import Step3 from '../components/register-login/Step3'

const Register = () => {
  const [currentStep, setCurrentStep] = useState(3)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.main}>
      <h2>Setup Your Account</h2>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 ? (
          <Step1 />
        ) : currentStep === 2 ? (
          <Step2 />
        ) : (
          <Step3 />
        )}
        <article>
          <button type='submit'>Next</button>
        </article>
      </form>
    </div>
  )
}
export default Register
