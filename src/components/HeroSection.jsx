import heroImg from "../assets/automobile.png"

const HeroSection = () => {
    return (
        <div className="text-center grid gap-20 m-auto sm:text-left sm:flex sm:items-center sm:justify-between ">
            <div>
                <h1 className="mb-4 max-w-2xl text-5xl font-black text-gray-900  sm:text-5xl lg:text-6xl">Let us get you back on the road!</h1>
                <p className="text-2xl max-w-2xl">Access the services of adept, professional automobile mechanics, anytime, <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">anywhere</span>!</p>

                {/* <div className="my-3">
                    <Button text="Sign up Now!" />
                </div> */}

            </div>
            <div className="sm:w-1/2 m-auto">
                <img className="w-full " src={ heroImg } alt="" />
            </div>
        </div>
    )
}

export default HeroSection