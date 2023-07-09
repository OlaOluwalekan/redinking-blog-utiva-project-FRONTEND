import { useState } from 'react'
import Input from './Input'

const Step1 = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
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
      />
      <Input
        type='password'
        name='password'
        labelText='Password'
        value={values.username}
        handleChange={handleChange}
      />
    </section>
  )
}
export default Step1
