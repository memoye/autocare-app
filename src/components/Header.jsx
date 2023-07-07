import Logo from "../components/logo/Logo"
import HomeNav from "./HomeNav"
import SignUpBtn from "./SignUpBtn"



const Header = () => {
    return (
        <div className="flex items-center justify-between py-3">
            <Logo />
            <div >
                <HomeNav />
            </div>
            <SignUpBtn
                name="Sign up"
            />

        </div>
    )
}

export default Header