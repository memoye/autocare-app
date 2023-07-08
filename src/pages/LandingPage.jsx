// import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Service from "../components/Service"
import logo from "../assets/autocareLogo.svg"
import NewHeader from "../components/NewHeader"
import roadside from "../assets/roadsideAsst.jpg"
import maintenance from "../assets/maintenance.jpg"
import carPaint from "../assets/carPaint.jpg"
import towing from "../assets/towing.jpg"


const LandingPage = () => {
    const services = [
        {
            headImg: roadside,
            title: "Roadside assistance",
            desc: "Swift assistance with breakdown, flat tyres, etc"
        },
        {
            headImg: maintenance,
            title: "Maintenance services",
            desc: "Top notch routine maintenance services such as oil changes, filter replacements, etc"
        },
        {
            headImg: carPaint,
            title: "Body and paint",
            desc: "Clean up that dent, like it never happened "
        },
        {
            headImg: towing,
            title: "Towing",
            desc: "Transportation of vehicles at competitive prices"
        }
    ]

    return (
        <div>
            <NewHeader />

            <div className="px-8">
                <div>
                    <HeroSection />
                </div>
                <div className="min-h-screen">
                    <h2 className="text-center text-6xl font-black capitalize text-slate-900 my-6">
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