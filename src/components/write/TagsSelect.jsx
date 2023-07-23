import { useEffect, useState } from 'react'
import { interests } from '../../interests-data'
import styles from '../../css/write.module.css'
import { FaTimes } from 'react-icons/fa'
import Input from '../register-login/Input'
import { toast } from 'react-toastify'

const TagsSelect = ({ selectedTag, setSelectedTag }) => {
  const [tagList, setTagList] = useState(interests)
  const [tagSearch, setTagSearch] = useState('')

  const handleChange = (e) => {
    setTagSearch(e.target.value)
  }

  const handleCheck = (li) => {
    setSelectedTag([...selectedTag, li])
  }

  const removeTag = (id) => {
    const newSelectedTag = selectedTag.filter((int) => {
      return int !== id
    })
    setSelectedTag(newSelectedTag)
    setTagList([...tagList, id])
  }

  useEffect(() => {
    const newTagList = tagList.filter((tag) => {
      return !selectedTag.includes(tag)
    })
    setTagList(newTagList)
  }, [selectedTag])

  return (
    <section className={styles['tags-select']}>
      <p>
        Select tags <span>*</span>
      </p>
      <Input
        type='text'
        name='searchTag'
        // labelText='Search Tag'
        placeholder='Search for tags relating to your post...'
        value={tagSearch}
        handleChange={handleChange}
      />
      <div>
        {selectedTag.length === 0 ? (
          <p>No tag selected. Select between 2 to 5 tags</p>
        ) : (
          selectedTag.map((int, i) => {
            return (
              <article key={i}>
                <span onClick={() => removeTag(int)}>
                  <FaTimes />
                </span>{' '}
                <span>{int}</span>
              </article>
            )
          })
        )}
      </div>
      <div>
        {tagList.map((li, i) => {
          return (
            <article key={li}>
              <input
                type='checkbox'
                name={li}
                id={li}
                value={li}
                onChange={(e) => {
                  if (selectedTag.length < 5) {
                    handleCheck(li)
                  } else {
                    toast.info(`You can't select more than 5 tags`)
                  }
                }}
              />
              <label htmlFor={li}>{li}</label>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default TagsSelect
