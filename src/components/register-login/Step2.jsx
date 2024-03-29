import Input from './Input'

const Step2 = ({ code, setCode }) => {
  const handleChange = (e) => {
    setCode(e.target.value)
  }

  return (
    <section>
      <Input
        type='number'
        name='code'
        labelText='Verification Code'
        value={code}
        handleChange={handleChange}
      />
    </section>
  )
}
export default Step2
