import React, { useEffect, useState } from 'react'
import userImg from "../../assets/userImg.jpg"
import { Link } from 'react-router-dom'



const DataArea = (props) => {
    const { id, name, email, phone, gender } = props



    return (
        <>

            <div className='flex gap-8 justify-between p-5 mt-2 rounded-xl '>
                <p className='font-semibold text-lg background-blue-100'>
                    <i className="fa-solid fa-user-tie text-amber-600 mr-2"></i>
                    Name</p>
                <p className='font-bold text-xl'> { name ? name : <span className='italic font-semibold text-slate-400'> Marylin Monroe </span> } </p>
            </div>

            <div className='flex gap-8  justify-between p-5 mt-2 rounded-xl '>
                <p className='font-semibold text-lg   background-blue-100 '>    <i className="fa-solid fa-venus-mars text-amber-600 mr-2"></i>  Gender</p>
                <p className='font-bold text-xl'> { gender ? gender : <span className='italic font-semibold text-slate-400'> Female </span> } </p>
            </div>

            <div className='flex  gap-8 justify-between p-5 mt-2 rounded-xl '>
                <p className='font-semibold text-lg  background-blue-100'> <i className="fa-solid fa-at text-amber-600 mr-2"></i> Email</p>
                <p className='font-bold text-xl'> { email ? email : <span className='italic font-semibold text-slate-400'> examplemail@yahoo.com </span> } </p>
            </div>

            <div className='flex gap-8  justify-between p-5 mt-2 rounded-xl '>
                <p className='font-semibold text-lg background-blue-100'>
                    <i className="fa-solid fa-phone text-amber-600 mr-2"></i>
                    Phone</p>
                <p className='font-bold text-xl'> { phone ? phone : <span className='italic font-semibold text-slate-400'> 0810 123 4567 </span> } </p>
            </div>
            <Link to="/profileEdit">


                <div className='mt-4 w-full text-center'>
                    <button className={ `px-5 py-2 drop-shadow-lg shadow-black rounded transition-all duration-75 focus:drop-shadow focus:text-blue-700 focus:bg-blue-300 text-amber-600 font-bold text-lg bg-amber-200 ` }>Edit <i className="fa-solid fa-pen-to-square text-slate-500"></i></button>
                </div>
            </Link>

        </>
    )
}

const Profile = (props) => {
    console.log(props)
    const { user, setUser } = props

    const getUser = () => {
        const payload = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/users/2", payload)
            .then(response => response.text())
            .then(result => {

                setUser(() => { result })

            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getUser()
    }, [])

    console.log(user)

    return (
        <div className='w-screen '>
            <div className='grid sm:h-2/3 bg-amber-100 rounded-xl w-fit  sm:grid overflow-hidden gap-4 m-auto'>

                <div className='sm:flex gap-4 place-items-center sm:max-w-screen-lg m-auto'>
                    <div className='bg-blue-200  sm:h-96 sm:px-20 text-center grid gap-4 justify-center p-4 rounded-xl '>
                        <h1 className='font-extrabold text-3xl text-slate-700 '> Profile </h1>
                        <div>
                            <div className={ `m-auto rounded-full aspect-square w-32 overflow-hidden` } style={ {
                                background: `url(${userImg}) no-repeat center center /cover`
                            } } title={ "userName" }>
                            </div>
                        </div>

                        <button className={ `drop-shadow-lg shadow-black rounded-tl-2xl rounded-br-2xl transition-all duration-75 focus:drop-shadow focus:rounded-2xl hover:rounded-2xl text-amber-600 font-bold text-lg bg-amber-200 ` }>Change</button>
                    </div>

                    <div>
                        <DataArea
                            { ...user }
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile