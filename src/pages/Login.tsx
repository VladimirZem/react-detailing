import React from 'react'
import MyInput from '../Components/UI/MyInput'
import MyButton from '../Components/UI/MyButton'

const Login: React.FC = () => {
    return (
        <div className='login container'>
            <h1 className='title' >Авторизация</h1>
            <form className='inputs'>
                <MyInput placeholder='Введите логин' type='text' />
                <MyInput type='password' placeholder='Введите пароль' />
                <MyButton
                    handleClick={() => { }}
                >Войти</MyButton>
            </form>
        </div>
    )
}

export default Login
