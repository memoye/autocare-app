import { useState } from "react"
import MainPageHeader from "./MainPage"

const VehicleInfo = (props) => {
    console.log(props)

    const { make, model, year, color } = props
    console.log(make)

    return (
        <div className="bg-gradient-to-r  mt-2 rounded-sm mx-auto max-w-xs from-blue-100 to-amber-600 justify-center px-4 py-2 text-amber-500">

            <h1 className="text-4xl  font-bold">{ make }</h1>

            <ul className='w-full text-right text-white'>
                <li className='w-full text-right'>
                    <strong>Model:</strong> { model }
                </li>
                <li className="w-full text-right">
                    <strong>Year:</strong> { year }
                </li>
                <li className="w-full text-right">
                    <strong>Color:</strong> { color }
                </li>
            </ul>
        </div>
    )
}


const Vehicles = (props) => {

    const [vehicles, setVehicles] = useState([])
    const [vehicle] = useState({})



    console.log(vehicle)

    return (
        <div className='overflow-hidden text-center '>
            <MainPageHeader />

            <div className='mt-28 mx-4 max-w-3xl'>
                {
                    <p> { vehicles } </p>

                }
            </div>
            <div>
                <div>
                    <input type="text" onChange={ (e) => {
                        vehicle.make = e.currentTarget.value
                        console.log(vehicle)
                    } } placeholder="Enter Make" />
                    <input type="text" onChange={ (e) => {
                        vehicle.model = e.currentTarget.value
                        console.log(vehicle)
                    } } placeholder="Enter model" />
                </div>

                <div>
                    <input type="number" onChange={ (e) => {
                        vehicle.year = e.currentTarget.value
                        console.log(vehicle)
                    } } placeholder="Enter year - 'YYYY'" />

                    <input type="text" onChange={ (e) => {
                        vehicle.color = e.currentTarget.value
                        console.log(vehicle)
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
        </div>
    )
}

export default Vehicles