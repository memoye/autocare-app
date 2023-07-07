import Logo from "../components/logo/Logo"
import HomeNav from "./HomeNav"



const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <Logo />
            <HomeNav />


        </div>
    )
}

export default Header