import { FaCheck, FaTimes } from 'react-icons/fa'

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
      <p
        style={{
          background:
            message && message.includes('available')
              ? '#0080008f'
              : '#ff000081',
        }}
      >
        {message}
      </p>
    </div>
  )
}
export default Input
