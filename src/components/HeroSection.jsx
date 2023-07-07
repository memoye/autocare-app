import heroImg from "../assets/automobile.png"
import SignUpBtn from "./SignUpBtn"

const HeroSection = () => {


    return (
        <div className="text-center  min-h-screen grid place-items-center m-auto sm:text-left sm:flex sm:items-center sm:justify-between ">
            <div className="grid gap-10 ">
                <h1 className="mb-4 max-w-2xl text-7xl font-black text-gray-900  sm:text-8xl ">Let's get you back on the road!</h1>
                <p className="text-2xl max-w-2xl">Access the services of adept, professional automobile mechanics, anytime, <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">anywhere</span>!</p>

                <div>
                    <SignUpBtn
                        name="Sign up now!"
                    />
                </div>
            </div>

            <div className="sm:w-1/2">
                <img className="w-full " src={ heroImg } alt="hero image" />
            </div>
        </div>
    )
}

export default HeroSection