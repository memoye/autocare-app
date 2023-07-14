import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom";
import Logo from "../components/logo/Logo";
import acx from "../assets/autocareLogo.svg"

const Footer = () => {
    return (
        // <footer
        //     className="text-center text-grey-500 py-2 text-gray-500 bg-gray-900 h-full"
        // >
        //     <div className="container">
        //         <p>
        //             Copyright &copy;2023  <span className="font-bold text"> AutoCareXpress!™</span> All rights reserved.
        //         </p>
        //         <ul className="list-inline mb-0">
        //             <li className="list-inline-item">
        //                 <Link to="/terms">Privacy Policy</Link>
        //             </li>
        //             <li className="list-inline-item">
        //                 <Link to="/terms">Terms of Service</Link>
        //             </li>
        //         </ul>
        //         <Typography color="white" className="font-normal">
        //             &copy; 2023 Material Tailwind
        //         </Typography>
        //         <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        //             <li>
        //                 <Typography
        //                     as="a"
        //                     href="#"
        //                     color="blue-gray"
        //                     className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        //                 >
        //                     About Us
        //                 </Typography>
        //             </li>
        //             <li>
        //                 <Typography
        //                     as="a"
        //                     href="#"
        //                     color="blue-gray"
        //                     className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        //                 >
        //                     License
        //                 </Typography>
        //             </li>
        //             <li>
        //                 <Typography
        //                     as="a"
        //                     href="#"
        //                     color="blue-gray"
        //                     className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        //                 >
        //                     Contribute
        //                 </Typography>
        //             </li>
        //             <li>
        //                 <Typography
        //                     as="a"
        //                     href="#"
        //                     color="blue-gray"
        //                     className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
        //                 >
        //                     Contact Us
        //                 </Typography>
        //             </li>
        //         </ul>
        //     </div>
        // </footer>




        <footer className="w-full bg-slate-800 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-slate text-center md:justify-between">
                <img src={ acx } alt="logo-ct" className="w" />

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="white"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-white-50" />
            <Typography color="white" className="text-center font-normal">
                &copy; 2023 AutocareXpress
            </Typography>
        </footer>
    );
};

export default Footer;