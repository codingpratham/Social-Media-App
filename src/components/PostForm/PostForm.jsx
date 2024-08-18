import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Botton,Input,Select,Rte} from '../index'
import service from '../../appwrite/database'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const PostForm = () => {

    const {register,handleSubmit,watch,setValue,getValues}=useForm()

    const navigate=useNavigate()


  return (
    <>
    <h1>PostForm</h1>
    </>
  )
}

export default PostForm