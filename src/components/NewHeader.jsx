import { useState } from "react"
import Logo from "./logo/Logo";
import NewItem from "./NavItem"
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const linkInfo = [
        { id: "About", href: "/About" },
        { id: "Services", href: `/Services` },
        { id: "Contact", href: `/Contact` }
    ]

    return (
        <div className="flex items-center justify-between  py-0 px-8" style={ {
            marginTop: "-10px",
            marginBottom: "2rem"
        } }>
            <div className="hidden sm:flex">
                <Logo />
            </div>

            <div to={ "/" } className="flex sm:hidden" style={ {
                marginLeft: '-4rem',
            } }>
                <Logo />

            </div>



            <nav>
                <section className="MOBILE-MENU flex lg:hidden">

                    <div
                        className="HAMBURGER-ICON space-y-2"
                        onClick={ () => setIsNavOpen((prev) => !prev) }
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 hover:bg-blue-800"></span>
                        <span className="block h-0.5 w-6 animate-pulse bg-gray-600 hover:bg-amber-500"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600 hover:bg-blue-700"></span>
                    </div>

                    <div className={ isNavOpen ? "showMenuNav bg-blue-900" : "hideMenuNav" }>

                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={ () => setIsNavOpen(false) }>
                            <svg
                                className="h-7 w-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>

                        <ul className="flex flex-col items-center justify-between  h-fit">
                            {
                                linkInfo.map((info, index) => {
                                    return (<NewItem
                                        key={ index }
                                        { ...info }
                                    />)
                                })
                            }
                        </ul>

                    </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                    {
                        linkInfo.map((info, index) => {
                            return (<NewItem
                                key={ index }
                                { ...info }

                            />)
                        })
                    }
                </ul>
            </nav>

            <style>{ `
.hideMenuNav {
display: none;
}
.showMenuNav {
display: block;
position: absolute;
width: fit-content;
height: fit-content;
top: 5vw;
right: 5vw;

z-index: 10;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 4rem 8rem;
border-radius: 2rem;
}

.showMenuNav p {
    color: white;
    font-size: 1.4em;
    margin-top: 1.5rem;
}


.showMenuNav svg {
    border-radius: 50%;
    color: blue;
    width: 100%;
    background: white;
}
`}</style>
        </div>
    );
}
