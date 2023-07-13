import { useState } from "react";
import MainPageHeader from "./MainPage";
import { useNavigate } from "react-router-dom";


const EditProfile = (props) => {
    console.log(props)
    const [name, setName] = useState(props.name);
    const [gender, setGender] = useState(props.gender);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);



    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            gender,
            email,
            phone
        }

        await fetch(`https://autocarexpress.onrender.com/api/users/2`, {
            method: "PUT",
            body: JSON.stringify(data),
        })
    }

    const navigate = useNavigate()

    return (
        <div>
            <MainPageHeader />
            <div className="max-w-xl m-auto">

                <div className='mt-28 text-center sm:text-left mx-4 max-w-3xl'>
                    <h1 className="text-3xl font-bold ">Edit profile</h1>
                    <p>Update your info and press "submit"</p>
                </div>
                <form onSubmit={ handleSubmit } className="mx-2">
                    <input
                        type="text"
                        placeholder="Name"
                        value={ name }
                        className="w-full mt-4 border-2 border-slate-300 p-2 text-xl"
                        onChange={ (e) => setName(e.target.value) }
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        value={ gender }
                        className="w-full mt-4 border-2 border-slate-300 p-2 text-xl"
                        onChange={ (e) => setGender(e.target.value) }
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={ email }
                        className="w-full mt-4 border-2 border-slate-300 p-2 text-xl"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        value={ phone }
                        className="w-full mt-4 border-2 border-slate-300 p-2 text-xl"
                        onChange={ (e) => setPhone(e.target.value) }
                    />
                    <button onClick={ () => {
                        navigate("/profile")
                    } } type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md">
                        Submit
                    </button>
                </form>
            </div>
        </div >
    )
}

export default EditProfile


