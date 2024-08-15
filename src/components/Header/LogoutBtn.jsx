import React from 'react'
import {login,logout} from '../../store/AuthSlice'
import {useDispatch} from 'react-redux'
import authServicesInstance from '../../appwrite/auth'
import { Button } from '@material-tailwind/react'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const LogoutHandler=()=>{
        authServicesInstance.logOut.then(()=>{
            dispatch(logout())
        })
    }
  return (
    <>
    <Button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</Button>
    </>
  )
}

export default LogoutBtn