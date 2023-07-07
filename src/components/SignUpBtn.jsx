
const SignUpBtn = (props) => {
    const { name } = props

    return (
        <li className="bg-blue-900 py-2  list-none px-4 w-fit mx-auto sm:mx-0 text-white font-bold rounded-lg hover:bg-amber-500"> <a href="/"> { name } </a> </li>
    )
}

export default SignUpBtn