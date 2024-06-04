import React from 'react'
import LoginForm from '../components/Login/LoginForm'
import { useSelector } from 'react-redux'

const loginTest = () => {
    const { currentUser } = useSelector(state => state.currentUser);
    // console.log(currentUser.user_metadata.nickName);

    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default loginTest