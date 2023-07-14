// import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Service from "../components/Service"
import NewHeader from "../components/NewHeader"
import roadside from "../assets/roadsideAsst.jpg"
import maintenance from "../assets/maintenance.jpg"
import carPaint from "../assets/carPaint.jpg"
import towing from "../assets/towing.jpg"
import repairman from "../assets/repairman.svg"
import { Link, NavLink } from 'react-router-dom';
import Footer from "./Footer"
import { yellow } from "@mui/material/colors"



const LandingPage = () => {
    const services = [
        {
            headImg: roadside,
            title: "Roadside assistance",
            desc: "Swift assistance with breakdown, flat tyres, etc",
            col: "bg-black",
            dir: "flex-row",
            txthead: "text-amber-500",
            txtbody: "text-white"
        },
        {
            headImg: maintenance,
            title: "Maintenance services",
            desc: "Top notch routine maintenance services such as oil changes, filter replacements, etc",
            col: "bg-amber-600",
            dir: "flex-row-reverse",
            txthead: "text-black",
            txtbody: "text-white"
        },
        {
            headImg: carPaint,
            title: "Body and paint",
            desc: "Clean up that dent, like it never happened ",
            col: "bg-white",
            dir: "flex-row",
            txthead: "text-amber-600",
            txtbody: "text-black"
        },
        {
            headImg: towing,
            title: "Towing",
            desc: "Transportation of vehicles at competitive prices",
            col: "bg-slate-500",
            dir: "flex-row-reverse",
            txthead: "text-white",
            txtbody: "text-slate-900"
        }
    ]

    return (
        <div className="">
            <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll no-scrollbar">
                {/* <div className="sm:flex snap-center snap-always"></div> */ }

                <div className="px-8 snap-start snap-always">
                    <div className="monty">
                        <NewHeader />
                        <HeroSection />
                    </div>

                </div>
                <div className="snap-start snap-always h-screen grid grid-cols-2 place-items-center">
                    <img src={ repairman } alt="" />
                    <h2 className="text-center sm:text-left text-4xl sm:text-6xl monty font-black uppercase text-slate-900 mt-6">
                        our services
                    </h2>
                </div>

                {/* <div className="text-black"> */ }
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
                {/* </div> */ }

                <div className="h-1/2 snap-center snap-always">
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default LandingPage