import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import SignInPage from './pages/authentication/RegistrationPage'

import { useContext, useState } from "react"
import LandingPage from './pages/LandingPage'
import RequestPage from './pages/RequestPage';

import NotifPage from './pages/NotificationPage';
import { HomePage, ProfilePage } from './pages/MainPage'
import Login from './pages/authentication/Signin';
import EditProfile from './pages/EditProfile';
import TermsAndPrivacy from './pages/TermsAndConditions';
import Vehicles from './pages/Vehicles';
import { Usercontext } from './components/context/UserProvider';




function App() {
  const { user, setUser } = useContext(Usercontext);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <LandingPage /> } />
        <Route path="/home" element={ <HomePage /> } />
        <Route path="signup" element={ <SignInPage /> } />
        <Route path='login' element={ <Login /> } />
        <Route path="/request" element={ <RequestPage /> } />
        <Route path="/notifications" element={ <NotifPage /> } />

        <Route path="/profile" element={ <ProfilePage
          user={ user }
          setUser={ setUser }
        /> } />
        <Route path="/terms" element={ <TermsAndPrivacy /> } />
        <Route path='/profileEdit' element={ <EditProfile { ...user } /> } />
        <Route path="vehicles" element={ <Vehicles /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App