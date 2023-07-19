import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className='loading'>
      <ReactLoading
        type='spin'
        height={75}
        width={75}
        className='loading'
        color='var(--purpleBlue)'
      />
    </div>
  )
}
export default Loading
