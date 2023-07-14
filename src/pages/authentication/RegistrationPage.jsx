
import SideImg from "../../components/SideImg"
import Logo from "../../components/logo/Logo"
import { Link, useNavigate } from "react-router-dom"
import NavItem from "../../components/NavItem"

import { useContext, useState } from "react"
import { Usercontext } from "../../components/context/UserProvider"

export const ValidationPage = () => {
    const { user, setUser } = useContext(Usercontext)
    const [loading, setLoading] = useState(false)
    const [userWarn, setUserWarn] = useState("")
    const [verificationCode, setVerificationCode] = useState("")
    const [res, setRes] = useState("")
    const navigate = useNavigate()
    const [status, setStatus] = useState(0)
    // const baseUrl = "https://autocarexpress.onrender.com";


    async function registerUser() {

        var raw = JSON.stringify({
            "email": email,
            "password": password,
            "roles": [
                "User"
            ]
        });


        const payload = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: raw,
            redirect: 'follow'
        };
        let res

        fetch("https://autocarexpress.onrender.com/api/authentication/register", payload)
            .then(response => {
                console.log(response.status)
                res = response.status
                return response.text()

            })
            .then(result => {
                console.log(res)

                const data = JSON.parse(result)
                setStatus(() => { data.status })
                setLoading(false)

                res == 200 ?
                    (
                        console.log(data),
                        setUser(data),
                        navigate("/validation")
                    ) :
                    (
                        setUserWarn("Please try again"),
                        console.log(data))
            })

            .catch((error) => { console.log('error', error) })
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
                        <h1 className="text-4xl font-black text-gray-900"><i className="fa-solid fa-envelope text-amber-500 animate-bounce"></i> You've got mail!</h1>

                        <div className=" grid">
                            <label className="text-xl text-slate-800" htmlFor="userEmail"> <span className="text-red-600 text-2xl">*</span>Check your email for verification code </label>
                            <input className="p-2 rounded border-2 border-slate-600" type="password" name="userEmail" required placeholder="Enter code here" onChange={ (e) => { setVerificationCode(e.currentTarget.value) } } />
                        </div>


                        <button onClick={
                            () => {
                                !verificationCode && setUserWarn("Enter code to verify!")
                            } } className="bg-blue-600 text-white font-semibold p-3 rounded hover:bg-amber-500 transition-all hover:text-slate-900" type="submit" value="Sign up!" > Verify
                            { loading && <span className=""> <i className="fa-solid text-white fa-spinner animate-spin "></i>  </span> }
                        </button>

                        <div className="w-fit m-auto">
                            <p className="text-red-500 font-bold italic  animate-pulse"> { userWarn } </p>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}



const SignInPage = () => {
    const { user, setUser } = useContext(Usercontext)
    const [loading, setLoading] = useState(false)
    const [userWarn, setUserWarn] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPasswowrd, setConfirmpassword] = useState("")
    const [res, setRes] = useState("")
    const navigate = useNavigate()
    const [status, setStatus] = useState(0)
    // const baseUrl = "https://autocarexpress.onrender.com";


    async function registerUser() {

        var raw = JSON.stringify({
            "email": email,
            "password": password,
            "roles": [
                "User"
            ]
        });


        const payload = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: raw,
            redirect: 'follow'
        };
        let res

        fetch("https://autocarexpress.onrender.com/api/authentication/register", payload)
            .then(response => {
                console.log(response.status)
                res = response.status
                return response.text()

            })
            .then(result => {
                console.log(res)

                const data = JSON.parse(result)
                setStatus(() => { data.status })
                setLoading(false)

                res == 200 ?
                    (
                        console.log(data),
                        setUser(data),
                        navigate("/validation")
                    ) :
                    (
                        setUserWarn("Please try again"),
                        console.log(data))
            })

            .catch((error) => { console.log('error', error) })
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
                                password == confirmPasswowrd
                                    ?
                                    (setLoading(true),
                                        registerUser())
                                    : setUserWarn("Passwords do not match, please check")
                            } } className="bg-blue-600 text-white font-semibold p-3 rounded hover:bg-amber-500 transition-all hover:text-slate-900" type="submit" value="Sign up!" > Sign Up!
                            { loading && <span className=""> <i className="fa-solid text-white fa-spinner animate-spin "></i>  </span> }
                        </button>

                        <div className="w-fit m-auto">
                            <p className="text-red-500 font-bold italic  animate-pulse"> { userWarn } </p>
                        </div>

                        <p className="text-sm flex gap-1 w-fit my-2 mx-auto sm:m-0 sm:text-left ">Already have an account?<span> <Link to="/login"> <NavItem
                            id="Login"
                        /></Link> </span>
                        </p>
                        <p className="text-sm italic text-center gap-1 w-fit my-2 mx-auto sm:m-0 sm:text-left ">By clicking "Sign up!", you agree to our
                            <span className="mx-1">
                                <Link to="/terms">
                                    <NavItem id="Terms and Conditions" />
                                </Link>
                            </span>
                            and have read and acknowleged our
                            <span>
                                <Link to="/terms">
                                    <NavItem id="Privacy policy" />
                                </Link>
                            </span>
                            .
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignInPage