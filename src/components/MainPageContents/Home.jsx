import requestImg from "../../assets/request-service.svg";
import seviceImg from "../../assets/service-status.svg";
import findProvider from "../../assets/find-providers.svg";
import NewNotification from '../NewNotification'
import { useEffect, useState } from "react";


export const ActionBtn = (props) => {
    const { illustration, btnLabel, col } = props

    return (
        <button className="hover:bg-black flex items-center active:border-2  sm:max-w-xs border-slate-800 bg-slate-400 rounded h-32">
            <div className={ `w-1/4 bg-amber-${col} rounded` }>
                <img src={ illustration } alt={ btnLabel } className="w-full " />
            </div>

            <div className="h-full m-auto grid place-items-center" >
                <h1 className="text-center text-slate-800 font-bold">{ btnLabel.toUpperCase() }</h1>
            </div>
            <style>

            </style>
        </button>

    )
}


const Home = () => {

    const images = [
        {
            illustration: requestImg,
            btnLabel: "Request",
            col: "600"

        },
        {
            illustration: seviceImg,
            btnLabel: "Service status",
            col: "900"
        },
        {
            illustration: findProvider,
            btnLabel: "Find Mechanic",
            col: "600"
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

        <>
            <div className="sm:w-screen min-w-screen">
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
                    <h2 className="mt-6 font-bold text-lg italic">Recent Activity</h2>
                    <div className="sm:no.scrollbar  overflow-scroll max-h-screen sm:grid sm:grid-cols-2 gap-2 grid scroll-p-0">

                        <NewNotification />
                        <NewNotification />

                        <NewNotification />
                        <NewNotification />
                        <NewNotification />
                        <NewNotification />

                        <NewNotification />
                        <NewNotification />

                    </div>
                </div>
                <div className="w-screen ">

                    <div className="mb-20 mt-10 text-center max-w-2xl   m-auto">
                        <h2 className="text-2xl font-black text-amber-600 m-4"><i className="fa-solid fa-car-on"></i> { title ? title : "Tips" }!</h2>
                        <div>
                            <p className="text-xl sm:text-2xl  leading-8 font-semibold">{ description ? description : "Get daily car maintenance tips here!" }</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home