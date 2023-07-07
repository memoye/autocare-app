import Button from "./RegButton"
import heroImg from '../assets/heroImg.png'
import Register from "./Register"


const Hero = (props) => {
    const { signUp, setSignUp } = props
    console.log(signUp)

    return (
        <div className="flex justify-evenly items-center py-10">
            <div >
                <h1 className="mb-4 max-w-2xl text-5xl font-black text-gray-900  md:text-5xl lg:text-6xl">Let us get you back on the road!</h1>
                <p className="text-2xl max-w-2xl">Access the services of adept, professional automobile mechanics, anytime, <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 font-bold ">anywhere</span>!</p>

                {/* <div className="my-3">
                    <Button text="Sign up Now!" />
                </div> */}
            </div>
            {
                signUp ? <Register /> :
                    <div className="bg-[url('./src/assets/automobile.png')] bg-cover bg-no-repeat bg-center">
                        <img src={ heroImg } alt="car" className="invisible" />
                    </div>
            }
        </div>
    )
}

export default Hero