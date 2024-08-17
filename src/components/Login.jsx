import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {login,logout} from '../store/AuthSlice'
import {Button,Input,L} from './index'
import { useDispatch } from 'react-redux'
import authServicesInstance from '../appwrite/auth'
import {useForm}  from 'react-hook-form'
const Login = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const {register, handleSubmit} = useForm()
    const {error,setError}=useForm('')
    const login=async(data)=>{
        setError("")
        try {
           const session= await authServicesInstance.login(data)
           if(session) {
            const userData=await authServicesInstance.getCurrentUser()
            if(userData){
                dispatch(login(userData))
                navigate('/')
            }
           }
        } catch (error) {
            setError(error.message)
        }
    }
    
  return (
    <>
      <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <L width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)}  className='mt-8'>
        <div className='space-y-5'>
            <Input label="Email"
            placeholder="eEnter your name"
            type="email"
            {...register("email",{
                required: true,
                validate: {
                    matchPattern:(value)=>
                     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)||
                     "Invalid email address",
                },
            })}
            />
            <Input label="Password"
            placeholder="Password"
            type="password"
            {...register("password",{
                required: true,
                minLength: 8,
                validate: {
                    matchPattern:(value)=>
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)||
                    "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character",
                },
            })}
            />
            <Button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200">Sign In</Button>
        </div>
        </form>
        </div>
        </div>
    </>
  )
}

export default Login