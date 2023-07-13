import React, { useState } from 'react'
import Home from '../components/MainPageContents/Home'
import Request from '../components/MainPageContents/Request'
import Notification from '../components/MainPageContents/Notification'
import Profile from '../components/MainPageContents/Profile'
import { Routes, Route } from 'react-router-dom'
import Logo from '../components/logo/Logo'
import { NavLink, useNavigate } from "react-router-dom"


const TabBtn = (props) => {
    const { id, icon, path } = props;
    const navigate = useNavigate()


    return (
        <>
            <NavLink to={ path } id={ id } className="grid p-2 sm:flex items-center gap-2  w-full hover:text-amber-500 focus:text-amber-500 text-center focus:bg-slate-900 hover:bg-slate-900  bg-white rounded"
                onClick={
                    (e) => {
                        console.log(id)

                    }
                }
            >
                <span className="sm:text-lg text-2xl  sm:inline">
                    { icon }
                </span>
                <span className="text-lg hidden sm:inline" title={ id }>
                    { id }
                </span>
            </NavLink>
            <style>
                { `
                button {
                    background: blue;
                    color: amber;
                }
                `}
            </style>
        </>
    )
}


const MainPageHeader = () => {

    const tabs = [
        { id: "Request", icon: <i className="fa-regular fa-paper-plane"></i>, path: "/request" },
        { id: "Home", icon: <i className="fa-solid fa-house"></i>, path: "/home" },
        { id: "Notifications", icon: <i className="fa-solid fa-bell"></i>, path: "/notifications" }
    ]

    return (
        <>
            <div className="flex place-items-center  sm:px-12 pr-5 w-full fixed top-0 bg-white z-50">

                <div className="sm:hidden mobileLogo flex mx-auto">
                    <Logo />
                </div>

                <div className="sm:flex hidden ">
                    <Logo />
                </div>

                <div className="flex-1 sm:hidden py-8">
                    <p className="text-right ">Hi { "User" }!</p>
                </div>

                <div className="mobFooter flex max-w-lg m-auto py-4 sm:gap-4 sm:flex-1 sm:relative fixed bottom-0 w-full inset-x-0">

                    {
                        tabs.map(
                            (tab, index) => {
                                return (
                                    <TabBtn
                                        key={ index }
                                        { ...tab }
                                    />)
                            }
                        )
                    }

                </div>

                <div className="sm:flex hidden">

                    <TabBtn
                        id={ "Profile" }
                        icon={ <i className="fa-solid fa-user"></i> }
                        path={ "/profile" }
                    />
                </div>

                <div className="sm:hidden flex px-4 hover:text-white text-center focus:bg-slate-900 hover:bg- bg-white">

                    <TabBtn
                        id={ "Profile" }
                        icon={ <i className=" fa-solid fa-user"></i> }
                        path={ "/profile" }
                    />
                </div>



            </div>

            <style>

                { `
                .mobileLogo{
                    margin-left: -2.5rem;
                }

                .logo {
                    height: fit-content;
                }
}
                
                `}
            </style>
        </>
    )
}

export default MainPageHeader



export const HomePage = () => {
    return (
        <div >

            <MainPageHeader />
            <div className='w-fit m-auto'>


                <div className='mt-28 mx-4 max-w-3xl'>
                    <Home />
                </div>
            </div>

        </div>
    )
}

export const ProfilePage = (props) => {
    const { user, setUser } = props

    return (
        <div className='overflow-hidden'>
            <MainPageHeader />

            <div className='mt-28 mx-4 max-w-3xl'>
                <Profile
                    user={ user }
                    setUser={ setUser }
                />
            </div>
        </div>
    )
}

export const NotifPage = () => {
    return (
        <>
            <MainPageHeader />

            <div className='mt-28 mx-4 max-w-3xl'>
                <Notif />
            </div>
        </>
    )
}

