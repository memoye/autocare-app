import { useEffect, useState } from "react"
import MainPageHeader from "./MainPage"

const VehicleInfo = (props) => {
    console.log(props)

    const { id, userId, color, plateNumber, manufacture, model } = props

    return (
        <div className="bg-gradient-to-r  mt-2 rounded-sm mx-auto max-w-xs from-blue-100 to-amber-600 justify-center px-4 py-2 text-amber-500">

            <h1 className="text-2xl  text-right text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-black font-bold">{ manufacture }</h1>
            <div className="flex">
                <div>
                    <i className="fa-solid text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-black fa-car fa-beat"></i>

                </div>

                <ul className='w-full text-right text-white'>
                    <li className='w-full text-right'>
                        <strong>Model:</strong> { model }
                    </li>
                    <li className="w-full text-right">
                        <strong>Plate:</strong> { plateNumber }
                    </li>
                    <li className="w-full text-right">
                        <strong>Color:</strong> { color }
                    </li>
                </ul>
            </div>
        </div>
    )
}


const Vehicles = (props) => {

    const [vehicles, setVehicles] = useState([])
    const [info, setInfo] = useState([])




    function getVehicles() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://autocarexpress.onrender.com/api/vehicles/user/9f29aa34-97d4-40d2-8cfe-3bc66b2e6a20", requestOptions)
            .then(response => response.text())
            .then((result) => {
                setInfo(JSON.parse(result))
                console.log(info)

            })
            .catch(error => console.log('error', error));
    }

    useEffect(
        () => {
            getVehicles()
        }, []
    )



    return (
        <div className='overflow-hidden text-center '>
            <MainPageHeader />

            <div className='mt-28 sm:flex max-w-3xl'>
                {

                    info.map(
                        (item, index) => {
                            return (
                                <VehicleInfo
                                    key={ index }
                                    { ...item }
                                />
                            )
                        }
                    )
                }
            </div>
            <div className="mt-8">
                <div>
                    <input type="text" onChange={ (e) => {

                    } } placeholder="Enter Make" />
                    <input type="text" onChange={ (e) => {

                    } } placeholder="Enter model" />
                </div>

                <div>
                    <input type="number" onChange={ (e) => {

                    } } placeholder="Enter year - 'YYYY'" />

                    <input type="text" onChange={ (e) => {

                    } } placeholder="Enter color" />
                </div>
            </div>
            <button
                onClick={ () => {



                } }

                className="
                    mt-6
                    
    inline-flex
    justify-center
    text-blue-600
    bg-blue-200
    font-bold
    px-4
    py-2
   
    border border-gray-300
    rounded-md
    hover:text-white
    hover:bg-gray-700
  "
            >
                Add vehicle
            </button>


        </div >
    )
}

export default Vehicles