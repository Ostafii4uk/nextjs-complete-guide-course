'use client'

import { useRef } from 'react'
import styles from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef()
  
  function handlePickClick() {
    imageInputRef.current.click()
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          ref={imageInputRef}
          className={styles.input}
          type='file'
          name={name}
          id={name}
          accept='image/png, image/jpeg'
        />
        <button type='button' className={styles.button} onClick={handlePickClick}>Pick an image</button>
      </div>
    </div>
  )
}