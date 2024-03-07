import {forwardRef, useId} from 'react'

const Input = forwardRef(function Input({
    label,
    type="text",
    classname = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
                htmlFor={id}
                className='inline-block text-black text-lg mb-1 pl-1'>
                {label}
            </label>}
            <input 
                type={type}
                className='w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input