/* eslint-disable react/prop-types */

const NavItem = (props) => {
    // const cta = "Hello"
    const { id } = props
    console.log(id)

    return (
        <li className="list-none">
            <p className="font-medium text-blue-600 dark:text-blue-500 hover:text-amber-600">{ id }</p>
        </li>
    )
}

export default NavItem