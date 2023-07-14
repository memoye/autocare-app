import { useEffect, useState } from "react";
import IcOutlineFileUpload from "../IcOutlineFileUpload";
import { filterProps } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Request = () => {

    const [services, setServices] = useState([])
    const [serviceType, setServiceType] = useState("")
    const [locations, setLocations] = useState([])
    const [selectedLoc, setSelectedLoc] = useState("")
    const [serviceId, setServiceId] = useState("")
    const [locationId, setLocationId] = useState("")
    const navigate = useNavigate()


    function gettingData(end, setting) {
        fetch(`https://autocarexpress.onrender.com/api/${end}/`)
            .then(response => response.text())
            .then(result => setting(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        gettingData("refservicetypes", setServices)
        gettingData("servicelocations", setLocations)
    }, [])

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (

        <div className="sm:ml-60">

            <div className='px-4 overflow-x   mb-20'>
                <h1 className=" m-auto text-4xl font-black text-gray-900">Need some help?</h1>
                <p>Send a request by filling out the form below</p>

                <div className='mt-4'>
                    <div className="max-w-screen-md h-96 bg-red-400 absolute left-0 top-0 "></div>

                    <div className="mt-4 grid font-semibold">
                        <label className="text-xl text-slate-800" htmlFor="userEmail">Request subject: </label>
                        <select onChange={ (e) => {
                            setServiceType(e.currentTarget.value)

                            setServiceId(services.find(serv => serv.serviceName == e.currentTarget.value).id)

                            console.log(serviceId)


                        } } name="subject" className='p-2 text-lg border-2 border-slate-700 rounded sm:max-w-sm' id="subject">
                            <option className='text-lg border-2 border-slate-400' value="">Select service</option>
                            {
                                services.map((service) => {
                                    const { id, serviceName, description } = service


                                    return (
                                        <option key={ id } title={ description }> { serviceName } </option>
                                    )
                                })
                            }
                        </select>
                        { <p className="text-red-500 text-sms italic"> { !serviceType && "Please select service type" }</p> }
                    </div>

                    <div className="mt-4 grid font-semibold">
                        <label className="text-xl text-slate-800" htmlFor="userEmail">Select Location: </label>
                        <select onChange={ (e) => {
                            setSelectedLoc(e.currentTarget.value)
                            setLocationId(locations.find(locs => locs.location == e.currentTarget.value).id)

                            console.log(locationId)
                        } } name="subject" className='p-2 text-lg border-2 border-slate-700 rounded sm:max-w-sm' id="subject">
                            <option className='text-lg border-2 border-slate-400' value=""></option>
                            {

                                locations.map((loc) => {
                                    const { id, location } = loc

                                    return (
                                        <option key={ id } > { location } </option>
                                    )
                                })
                            }
                        </select>
                        { <p className="text-red-500 text-sms italic"> { !selectedLoc && "Please select location" }</p> }
                    </div>

                    <div className="mt-8 grid font-semibold">
                        <label className="text-xl text-slate-800" htmlFor="userEmail">Request subject: </label>
                        <textarea className='border-2 resize-x sm:w-1/2   border-slate-400 rounded-sm' name="description" id="description" rows="3" placeholder='Add some description of the request'></textarea>
                    </div>

                    <div className="mt-8 grid font-semibold">
                        <label className="text-xl text-left mb-2 text-slate-800" htmlFor="image">Request subject: </label>
                        <input type="file" onChange={ handleChange } />
                        <div className=" bg-slate-300 w-full overflow-hidden rounded-lg h-30  p-4 max-h-80 max-w-xs grid place-items-center mt-4">
                            {
                                file ? <img className="rounded" src={ file } /> :
                                    <div>
                                        <IcOutlineFileUpload />
                                    </div>
                            }
                        </div>
                    </div>
                </div>

                <button





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

                    onClick={ () => {
                        setTimeout(() => {
                            navigate("/success")
                        })
                    } }

                >
                    Submit
                </button>

            </div>

        </div >
    )
}

export default Request