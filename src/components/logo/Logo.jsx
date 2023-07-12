import logoSvg from "../../assets/autocareLogo.svg"
import "./logo.css"
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <Link to="/" className="cursor-pointer">
            <div className="w-28 h-5/6 ml-14">
                <img className="w-full" src={ logoSvg } alt="Logo" />
            </div>
        </Link>
    )
}



export default Logo