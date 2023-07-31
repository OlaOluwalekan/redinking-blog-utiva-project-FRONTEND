import { useEffect, useState } from 'react'
import Input from './Input'
import { interests } from '../../interests-data'
import { FaTimes } from 'react-icons/fa'
import styles from '../../css/register.module.css'

const Step3 = ({ selectedInterests, setSelectedInterests }) => {
  const interestSet = new Set(interests)
  const uniqueInterests = [...interestSet]
  const [interestSearch, setInterestSearch] = useState('')
  const [interestList, setInterestList] = useState(uniqueInterests.slice(0, 15))

  const handleChange = (e) => {
    setInterestSearch(e.target.value)
  }

  useEffect(() => {
    if (interestSearch === '') {
      setInterestList(uniqueInterests.slice(0, 15))
      return
    }
    const newInterests = uniqueInterests.filter((interest) => {
      return interest
        .toLocaleLowerCase()
        .includes(interestSearch.toLocaleLowerCase())
    })
    setInterestList(newInterests)
  }, [interestSearch])

  const handleCheck = (li) => {
    setSelectedInterests([...selectedInterests, li])
  }

  const removeInterest = (id) => {
    const newSelectedInterest = selectedInterests.filter((int) => {
      return int !== id
    })
    setSelectedInterests(newSelectedInterest)
    setInterestList([...interestList, id])
  }

  useEffect(() => {
    const newInterestList = interestList.filter((int) => {
      return !selectedInterests.includes(int)
    })
    setInterestList(newInterestList)
  }, [selectedInterests])

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
        {selectedInterests.map((int, i) => {
          return (
            <article key={i}>
              <span onClick={() => removeInterest(int)}>
                <FaTimes />
              </span>{' '}
              <span>{int}</span>
            </article>
          )
        })}
      </div>
      <div>
        {interestList.map((li, i) => {
          return (
            <article key={li}>
              <input
                type='checkbox'
                name={li}
                id={li}
                value={li}
                onChange={(e) => handleCheck(li)}
              />
              <label htmlFor={li}>{li}</label>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Step3
