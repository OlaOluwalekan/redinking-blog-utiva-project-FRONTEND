import { useState } from 'react'
import Input from './Input'
import { interests } from '../../interests-data'
import { FaTimes } from 'react-icons/fa'
import styles from '../../css/register.module.css'

const Step3 = () => {
  const [interestSearch, setInterestSearch] = useState('')
  const [selectedInterests, setSelectedInterests] = useState([])
  const [interestList, setInterestList] = useState(interests)

  const handleChange = (e) => {
    setInterestSearch(e.target.value)
  }

  const handleCheck = (e, li) => {
    // // console.log(e.target.parentElement)
    // if (e.target.checked) {
    //   // e.target.parentElement.style.background = '#6446ff'
    //   // e.target.parentElement.style.display = 'none'
    // } else {
    //   e.target.parentElement.style.background = '#6546ff42'
    // }
    setSelectedInterests([...selectedInterests, li])
    const newInterestList = interestList.filter((int) => {
      return !selectedInterests.includes(int)
    })
    setInterestList(newInterestList)
  }

  console.log(selectedInterests)

  return (
    <section className={styles.step3}>
      <Input
        type='text'
        name='searchTag'
        labelText='Search Interests'
        placeholder='Search for subjects that interests you...'
        value={interestSearch}
        handleChange={handleChange}
      />
      <div>
        {/* <p>Your Interests</p> */}
        {selectedInterests.map((int, i) => {
          return (
            <article key={i}>
              <span>
                <FaTimes />
              </span>{' '}
              <span>{int.name}</span>
            </article>
          )
        })}
      </div>
      <div>
        {interestList.map((li) => {
          return (
            <article key={li.id}>
              <input
                type='checkbox'
                name={li.value}
                id={li.value}
                value={li.value}
                onChange={(e) => handleCheck(e, li)}
              />
              <label htmlFor={li.value}>{li.name}</label>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Step3
