import React, { useState } from 'react'
import NewNotification from '../NewNotification'

const Notification = () => {
    const [baseUrl] = useState('https://autocarexpress.onrender.com')

    return (
        <div className=''>
            <h1 className=" m-auto text-4xl font-black text-gray-900 w-screen text-center">Notifications</h1>
            <div className='h-96 w-screen overflow-y-scroll overflow-x-hidden no-scrollbar'>
                <div className='max-w-lg m-auto'>

                    <div className='h-full mt-4 grid gap-4 px-4 max-h-screen'>
                        <NewNotification />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification