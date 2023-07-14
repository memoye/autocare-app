// HOW TO CREATE A NEW CONTEXT
import { createContext, useState } from "react"   //<--1. import createcontext


export const Usercontext = createContext(null)   //<--2. Create and export the context (Usercontext)


const UserProvider = ({ children }) => {     //<-- 5i. Bring in the children
    const [user, setUser] = useState({})

    const [userId, setUserId] = useState("")

    return (


        <Usercontext.Provider  //<--3. include the created context (Usercontext) into the (UserProvider component declaration)
            value={ {
                user: user,
                setUser: setUser, userId: userId, setUserId: setUserId
            } } //<-- 4. assign a value attribute to the provider ||NB> 'value' is a keyword
        >
            { children /* <-- 5ii. Bring in the children */ }

        </Usercontext.Provider>
    )
}

export default UserProvider

// HOW TO USE THE CONTEXT
// 1. Wrap the children/destination components with the Provider (<CounterProvider></CounterProvider>) component
// 2. Import useContext in any child or descendants of the Provider components above eg. We're using it in the 'CustomButton' component
// ! Go to the 'CustomButton component to continue 