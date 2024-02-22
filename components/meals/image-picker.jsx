'use client'

import { useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState()
  const imageInputRef = useRef()
  
  function handlePickClick() {
    imageInputRef.current.click()
  }

  function changeInputHandler(event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
    
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? <p>No image picked yet.</p> : <Image src={pickedImage} alt='Yhe image selected by user' fill />}
        </div>
        <input
          ref={imageInputRef}
          className={styles.input}
          type='file'
          name={name}
          id={name}
          accept='image/png, image/jpeg'
          onChange={changeInputHandler}
          required
        />
        <button
          type='button'
          className={styles.button}
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  )
}