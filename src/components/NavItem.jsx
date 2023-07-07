/* eslint-disable react/prop-types */

const NavItem = (props) => {
    const { val } = props

    return (
        <button ><p className="font-medium text-blue-600 dark:text-blue-500 hover:text-amber-600 my-8 ">{ val }</p></button>
    )
}

export default NavItem

