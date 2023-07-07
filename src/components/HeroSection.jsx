import heroImg from "../assets/automobile.png"
import SignUpBtn from "./SignUpBtn"
import NavItem from "./NavItem"

const HeroSection = () => {


    return (
        <div className="text-center min-h-screen grid place-items-center m-auto sm:text-left sm:flex sm:items-center sm:justify-between ">
            <div className="grid gap-6 items-center ">
                <h1 className=" max-w-2xl text-6xl font-black text-gray-900  sm:text-8xl ">Let's get you back on the road!</h1>
                <p className="text-xl sm:text-2xl max-w-2xl leading-8">Access to professional automobile services anytime, <span className="text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-900 to-amber-600 sm:to-emerald-600 sm:from-sky-400 ">anywhere</span>!</p>

                <div>

                    <SignUpBtn
                        name="Sign up now!"
                    />

                    <p className="text-sm flex gap-1 w-fit m-auto sm:m-0 sm:text-left ">Already have an account?<span> <NavItem
                        id="Login"
                    /></span></p>


                </div>
            </div>

            <div className="sm:w-1/2">
                <img className="w-full hidden sm:block" src={ heroImg } alt="hero image" />
            </div>
        </div>
    )
}

export default HeroSection