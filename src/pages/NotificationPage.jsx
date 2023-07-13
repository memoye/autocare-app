import Notification from "../components/MainPageContents/Notification"
import MainPageHeader from "./MainPage"


const NotifPage = () => {
    return (
        <div>
            <MainPageHeader />

            <div className='mt-10 relative top-20 mx-4 max-w-3xl'>
                <Notification />
            </div>
        </div>
    )
}

export default NotifPage