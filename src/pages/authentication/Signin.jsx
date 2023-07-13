
import SideImg from "../../components/SideImg"
import Logo from "../../components/logo/Logo"
import { Link } from "react-router-dom"
import NavItem from "../../components/NavItem"
import { useContext, useEffect, useState } from "react"
import { Usercontext } from "../../components/context/UserProvider"

const Login = () => {
    const { user, setUser } = useContext(Usercontext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    let res

    async function userLogin() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password,
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            // redirect: 'follow'
        }

        var res
        fetch("https://autocarexpress.onrender.com/api/authentication/login", requestOptions)
            .then(response => {
                res = response
                return response.json()
            })
            .then(result => console.log(result, res.ok))
            .catch(error => console.log('error', error))
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
                        <h1 className="text-4xl font-black text-gray-900">Login <i className="fa-solid fa-right-to-bracket"></i></h1>

                        <div className=" grid font-semibold">
                            <label className="text-xl text-slate-800" htmlFor="userEmail">Email address: </label>
                            <input className="p-2 rounded border-2 border-slate-600" type="email" name="userEmail" required placeholder="Enter email" onChange={ (e) => { setEmail(e.currentTarget.value) } } />
                        </div>
                        <div className=" grid font-semibold">
                            <label className="text-xl text-slate-800" htmlFor="password">Password: </label>
                            <input className="p-2 rounded border-2 border-slate-600 focus:outline-amber-600" type="password" name="password" required placeholder="Enter password" onChange={ (e) => { setPassword(e.currentTarget.value) } } />
                        </div>

                        <Link to="/home">
                            <button onClick={ () => { userLogin() } } className="bg-blue-600 text-white font-semibold p-3  rounded hover:bg-amber-500 transition-all hover:text-slate-900" type="submit" value="Sign up!" > Login <i className="fa-solid fa-right-to-bracket"></i> </button>
                        </Link>

                        <Link className="text-sm text-red-500 flex gap-1 w-fit my-2 mx-auto sm:m-0 sm:text-left " to={ "/forgot-password" }> Forgot password?</Link>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login