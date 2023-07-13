import { useState } from "react"
import Request from "../components/MainPageContents/Request"
import MainPageHeader from "./MainPage"


const RequestPage = () => {

    return (
        <div>
            <MainPageHeader />

            <div className='mt-28 text-center sm:text-left mx-4 max-w-3xl overflow-x-hidden'>

                <Request

                />
            </div>
        </div>
    )
}

export default RequestPage