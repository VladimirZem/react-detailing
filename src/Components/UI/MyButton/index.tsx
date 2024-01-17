import React from 'react'
import styles from './MyButton.module.scss'

type MyButtonProps = {
    children: string;
    handleClick: () => void

}


const index: React.FC<MyButtonProps> = ({ children, handleClick }) => {
    return (
        <button className={styles.button} onClick={handleClick} >{children}</button>
    )
}

export default index
