import React from 'react'

const Request = (props) => {

    console.log(props, "from request")


    return (
        <div className='px-4'>
            <h1 className=" m-auto text-4xl font-black text-gray-900 w-screen text-center">Need some help?</h1>
            <p >Send a request by filling out the form below</p>

            <div className='mt-4'>
                <div className="mt-4 grid font-semibold">
                    <label className="text-xl text-slate-800" htmlFor="userEmail">Request subject: </label>
                    <select name="subject" className='p-2 text-lg border-2 border-slate-700 rounded sm:max-w-sm' id="subject">
                        <option className='text-lg border-2 border-slate-400'>Select service</option>
                    </select>
                </div>

                <div className="mt-8 grid font-semibold">
                    <label className="text-xl text-slate-800" htmlFor="userEmail">Request subject: </label>
                    <textarea className='border-2 border-slate-400 rounded-sm' name="description" id="description" rows="5" placeholder='Add some description of the request'></textarea>
                    {/* <select name="subject" className='p-2 text-lg mt-4 border-2 border-slate-700 rounded sm:max-w-sm' id="subject">
                        <option className='text-lg mt-4 border-2 border-slate-400'>Select service</option>
                    </select> */}
                </div>

                <div className="mt-8 grid font-semibold">
                    <label className="text-xl text-slate-800" htmlFor="userEmail">Request subject: </label>
                    <textarea className='border-2 border-slate-400 rounded-sm' name="description" id="description" rows="5" placeholder='Add some description of the request'></textarea>
                </div>
            </div>

        </div>
    )
}

export default Request