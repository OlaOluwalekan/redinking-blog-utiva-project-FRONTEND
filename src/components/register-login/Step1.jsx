import { useState } from 'react'
import Input from './Input'
import { useDispatch } from 'react-redux'
import { checkUsername } from '../../features/user/userSlice'

const Step1 = ({ values, setValues }) => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()

  const handleChange = async (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
    if (name === 'username') {
      const data = await dispatch(checkUsername({ username: value }))
      setMessage(data.payload.msg)
    }
  }

  return (
    <section>
      <Input
        type='text'
        name='firstName'
        labelText='First Name'
        value={values.firstName}
        handleChange={handleChange}
      />
      <Input
        type='text'
        name='lastName'
        labelText='Last Name (Optional)'
        value={values.lastName}
        handleChange={handleChange}
      />
      <Input
        type='email'
        name='email'
        labelText='Email'
        value={values.email}
        handleChange={handleChange}
      />
      <Input
        type='text'
        name='username'
        labelText='Username'
        value={values.username}
        handleChange={handleChange}
        message={message}
      />
      <Input
        type='password'
        name='password'
        labelText='Password'
        value={values.password}
        handleChange={handleChange}
      />
    </section>
  )
}
export default Step1
