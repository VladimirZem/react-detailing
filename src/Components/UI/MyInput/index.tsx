import React from 'react'
import styles from './MyInput.module.scss'

type MyInputProps = {
  placeholder: string;
  type: string;
}

const index: React.FC<MyInputProps> = ({ placeholder, type }) => {
  return (
    <input className={styles.MyInput} type={type} placeholder={placeholder}></input>
  )
}

export default index
