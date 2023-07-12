
import SideImg from "../../components/SideImg"
import Logo from "../../components/logo/Logo"
import { Link, useNavigate } from "react-router-dom"
import NavItem from "../../components/NavItem"

import { useState } from "react"

const SignInPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPasswowrd, setConfirmpassword] = useState("")
    const [res, setRes] = useState("")
    const navigate = useNavigate()
    const baseUrl = "https://autocarexpress.onrender.com";


    async function registerUser() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password,
            "roles": [
                "User"
            ]
        });

        const payload = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        fetch("https://autocarexpress.onrender.com/api/authentication/register", payload)
            .then(response => {
                return response.text()
            })
            .then(result => {
                console.log(result)
                return result
            })
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <div className="max-w-screen-2xl m-auto z-50">
                <div className='flex justify-center absolute top-8 left-1/4 sm:left-0  sm:px-8 sm:block'>
                    <Logo color={ "white" } />
                </div>
            </div>

            <div className="sm:flex sm:justify-evenly h-screen overflow-hidden items-center">
                <div className="img-area flex-auto">
                    <SideImg />
                </div>

                <div className="reg sm:max-w-sm flex-auto p-4 mt-12 h-screen grid place-items-center ">
                    <div className=" grid gap-6 w-full">
                        <h1 className="text-4xl font-black text-gray-900">Sign up!</h1>

                        <div className=" grid font-semibold">
                            <label className="text-xl text-slate-800" htmlFor="userEmail">Email address: </label>
                            <input className="p-2 rounded border-2 border-slate-600" type="email" name="userEmail" required placeholder="Enter email" onChange={ (e) => { setEmail(e.currentTarget.value) } } />
                        </div>

                        <div className=" grid font-semibold">
                            <label className="text-xl text-slate-800" htmlFor="password">Password: </label>
                            <input className="p-2 rounded border-2 border-slate-600 focus:outline-amber-600" type="password" name="password" required placeholder="Enter password" onChange={ (e) => { setPassword(e.currentTarget.value) } } />
                        </div>

                        <div className=" grid font-semibold">
                            <label className="text-xl text-slate-800" htmlFor="password">Confirm password: </label>
                            <input className="p-2 rounded border-2 border-slate-600 focus:outline-amber-600" type="password" name="password" required placeholder="Confirm password" onChange={ (e) => { setConfirmpassword(e.currentTarget.value) } } />
                        </div>
                        <button onClick={
                            () => {
                                registerUser()
                            } } className="bg-blue-600 text-white font-semibold p-3 rounded hover:bg-amber-500 transition-all hover:text-slate-900" type="submit" value="Sign up!" > Sign Up!</button>

                        <p className="text-sm flex gap-1 w-fit my-2 mx-auto sm:m-0 sm:text-left ">Already have an account?<span> <Link to="/login"> <NavItem
                            id="Login"
                        /></Link> </span>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignInPage