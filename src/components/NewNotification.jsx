import React from 'react'

const NewNotification = () => {
    return (
        <div className='rounded border-l-2 border-slate-600'>
            <div className='flex items-center justify-between gap-2 mx-2'>
                <i className="fa-solid fa-triangle-exclamation text-yellow-600"></i>
                <h1 className='flex-1  text-base font-semibold'>New Message from { "Evan" }</h1>
                <i className="fa-regular fa-circle-dot text-green-600"></i>
            </div>
            <p className='text-sm w-5/6 ml-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, aliquid!</p>
        </div>
    )
}

export default NewNotification