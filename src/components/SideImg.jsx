import side from "../assets/side.jpg"

const SideImg = () => {


    return (
        <>
            <div className="side sm:h-screen" >
            </div>
            <style>
                { `
                .side {
                    background: url(${side}) no-repeat center center / cover;
                }
                `}
            </style>
        </>
    )
}

export default SideImg