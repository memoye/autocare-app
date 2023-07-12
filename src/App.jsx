import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignInPage from './pages/authentication/RegistrationPage'

import { createContext } from "react"
import LandingPage from './pages/LandingPage'


import { HomePage, ProfilePage, NotifPage, RequestPage } from './pages/MainPage'
import Login from './pages/authentication/Signin';


export const UserContext = createContext()

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <LandingPage /> } />
        <Route path="/home" element={ <HomePage /> } />
        <Route path="signup" element={ <SignInPage /> } />
        <Route path='login' element={ <Login /> } />
        <Route path="/request" element={ <RequestPage /> } />
        <Route path="/notification" element={ <NotifPage /> } />
        <Route path="/profile" element={ <ProfilePage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App