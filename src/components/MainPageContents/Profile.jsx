import React, { useState } from 'react'
import userImg from "../../assets/userImg.jpg"

const Profile = () => {
    const [userName] = useState(" Jane Doe ")

    return (
        <div>
            <div className={ `rounded-full aspect-square w-40 overflow-hidden` } style={ {
                background: `url(${userImg}) no-repeat center center /cover`
            } } title={ userName }>
            </div>

        </div>
    )
}

export default Profile