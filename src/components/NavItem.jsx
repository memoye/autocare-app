/* eslint-disable react/prop-types */

const NavItem = (props) => {
    // const cta = "Hello"
    const { val } = props

    return (
        <button ><p className="font-medium text-blue-600 dark:text-blue-500 hover:text-amber-600">{ val }</p></button>
    )
}

export default NavItem