import logoSvg from "../../assets/autocareLogo.svg"
import "./logo.css"

const Logo = () => {
    return (
        <div className="flex items-center justify-start p-0 h-fit-content logo cursor-pointer">
            <img className="logo-img" src={ logoSvg } alt="Logo" />
            <h1 className="logo-text">AUTOCARE<span className="logo-subtext">XPRESS</span></h1>
        </div>
    )
}

export default Logo