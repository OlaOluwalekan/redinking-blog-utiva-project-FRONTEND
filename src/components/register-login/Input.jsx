const Input = ({
  type,
  name,
  value,
  labelText,
  handleChange,
  message,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name}>{labelText}</label>
      <br />
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder || labelText}
        value={value}
        onChange={handleChange}
      />
      <p>{message}</p>
    </div>
  )
}
export default Input
