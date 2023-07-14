import requestImg from "../../assets/request-service.svg";
import seviceImg from "../../assets/service-status.svg";
import findProvider from "../../assets/find-providers.svg";
import NewNotification from '../NewNotification'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const ActionBtn = (props) => {
    const { illustration, btnLabel, path } = props

    return (
        <Link to={ path }>
            <button

                type="button"
                className="h-40 flex items-center gap-4 text-xl w-full px-4 py-2 bg-gradient-to-tr from-amber-500 to-blue-500 text-white rounded-md
            hover:text-white
            hover:bg-gradient-to-r
            font-semibold
            transition-all
            duration-500
            ease-out
            active:bg-gradient-to-br
            hover:scale-105
            select-none
            monty
            uppercase
            "
            >
                <div className="w-1/2"> <img src={ illustration } alt="illustration" /> </div>
                { btnLabel }
            </button>
        </Link>

    )
}


const Home = () => {

    const images = [
        {
            illustration: requestImg,
            btnLabel: "Request",
            path: "/request"

        },
        {
            illustration: seviceImg,
            btnLabel: "My Vehicles",
            path: "/vehicles"
        },
        {
            illustration: findProvider,
            btnLabel: "Find Mechanic",
            col: "/request"
        }
    ]

    const [tips, setTips] = useState({})

    async function loadTips() {
        const resp = await fetch("https://autocarexpress.onrender.com/api/doyouknow")
        const data = await resp.json()
        console.log(data)
        setTips(data)
        return data
    }

    useEffect(() => {
        loadTips()
    }, [])

    const { title, description } = tips

    return (

        <div className="">
            <div className=" bg-blue-200 py-4 mb-4 sm:max-w-screen-sm m-auto">

                <div className=" my-10 text-center max-w-2xl   m-auto">
                    <h2 className="text-2xl font-black text-amber-600 m-4"><i className="fa-solid fa-car-on"></i> { title ? title : "Tips" }!</h2>
                    <div>
                        <p className="text-xl sm:text-2xl  leading-8 font-semibold">{ description ? description : "Get daily car maintenance tips here!" }</p>
                    </div>
                </div>
            </div>
            <div className=" sm:min-w-screen ">
                <div className="sm:max-w-3xl m-auto">
                    <div className="sm:cols-2 gap-2 sm:flex grid ">

                        {
                            images.map((image, index) => {
                                return (<ActionBtn
                                    key={ index }
                                    { ...image }
                                />)
                            })
                        }

                    </div>
                    <h2 className="mt-6 text-blue-500 font-bold text-lg italic">Recent Activity</h2>
                    <div className="sm:no.scrollbar  overflow-scroll max-h-screen sm:grid sm:grid-cols-2 gap-2 grid scroll-p-0">

                        <NewNotification />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home