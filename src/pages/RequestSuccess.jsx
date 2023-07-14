import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const RequestSuccessfulPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 5000)
    }, [])

    return (
        <div className="w-full max-w-lg mx-auto px-4 pt-4 pb-8">
            <h1 className="text-3xl text-center font-bold">Request Successful</h1>
            <p className="text-center mb-4">A technician will contact you soon!</p>
            <p className="text-center">You will be redirected to the home page in a moment</p>
        </div>
    )
}

export default RequestSuccessfulPage