import heroImg from "../assets/automobile.png"
import SignUpBtn from "./SignUpBtn"
import NavItem from "./NavItem"
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

const HeroSection = () => {


    return (
        <div className="text-center min-h-screen grid place-items-center m-auto sm:text-left sm:flex sm:items-center justify-between " style={ {
            marginTop: "-6rem"
        } }>
            <div className="grid gap-6 items-center justify-between mt-14 ">
                <h1 className=" max-w-2xl text-5xl font-black text-gray-800  sm:text-7xl ">Let's get you back on the road!</h1>
                <p className="text-xl sm:text-2xl max-w-2xl leading-8">Get access to professional automobile services anytime, <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-900 to-amber-600 sm:to-emerald-600 sm:from-sky-400 ">anywhere</span>!
                </p>

                <div>
                    <Link to={ "/signup" }>
                        <SignUpBtn
                            name="Sign up now!"
                        />
                    </Link>

                    <p className="text-sm flex gap-1 w-fit my-2 mx-auto sm:m-0 sm:text-left ">Already have an account?
                        <span>
                            <Link to="/login">
                                <NavItem id="Login" />
                            </Link>
                        </span>
                    </p>


                </div>

                <div className="sm:hidden">
                    <img src={ heroImg } alt="hero image" />
                </div>
            </div>

            <div className="sm:w-1/2">
                <img className="w-full hidden sm:block" src={ heroImg } alt="hero image" />
            </div>
        </div >
    )
}

export default HeroSection