/* eslint-disable react/prop-types */

const NavItem = (props) => {
    // const cta = "Hello"
    const { id } = props

    return (
        <button className="list-none">
            <p className="font-medium text-blue-600 dark:text-blue-500 hover:text-amber-600">{ id }</p>
        </button>
    )
}

export default NavItem