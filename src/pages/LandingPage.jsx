// import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Service from "../components/Service"
import logo from "../assets/autocareLogo.svg"
import NewHeader from "../components/NewHeader"

const LandingPage = () => {
    const services = [
        {
            headImg: logo,
            title: "Roadside assistance",
            desc: "Swift assistance with breakdown, flat tyres, etc"
        },
        {
            headImg: logo,
            title: "Maintenance services",
            desc: "Top notch routine maintenance services such as oil changes, filter replacements, etc"
        },
        {
            headImg: logo,
            title: "Body and paint",
            desc: "Clean up that dent, like it never happened "
        },
        {
            headImg: logo,
            title: "Towing",
            desc: "Transportation of vehicles at competitive prices"
        }
    ]

    return (
        <div>
            <NewHeader />

            <div className="px-1">
                <div>
                    <HeroSection />
                </div>
                <div>
                    <h2 className="text-center text-4xl font-extrabold capitalize text-blue-500 my-6">
                        our services
                    </h2>
                    <div className=" sm:flex sm:gap-2 sm:place-items-center">
                        {
                            services.map((service) => {
                                return (
                                    <Service
                                        key={ service.title }
                                        { ...service }
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage