import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import AuthServicesInstaces from './appwrite/auth'
import { logout,login } from './store/AuthSlice'

const App = () => {
  
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    AuthServicesInstaces.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }})
    .finally(()=>setLoading(false))
  },[])

  
  return (
    <>
   
    </>
  )
}

export default App