import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type='text',
    classname='',
    ...props,
},ref){
    return(
        <>
        <div className='w-full'>
        {label && <label className='
        inline-block 
        mb-1 
        pl-1'
        >
            {label}
            </label>}
            <input type={type}
            className={`  ${classname}`}/>
        </div>
        </>
    )
})

export default Input