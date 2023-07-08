
import smallDots from "../assets/dots-grid_small.svg"


const Service = (props) => {
    const { headImg, title, desc } = props;
    console.log(props);
    return (
        <>
            <div className="card rounded-2xl text-left min-w-xs m-auto mb-2  sm:h-70 sm:w-96 sm:h-96 relative overflow-hidden grid place-items-center">

                <div className="img transition-all ">
                    <img className="m-auto " src={ headImg } alt="Descriptive image" />
                </div>

                <img src={ smallDots } alt="dots grid" className="smalldots absolute " />



                <div className=" txt absolute">
                    <h3 className="text-2xl font-semibold text-amber-500">{ title }</h3>
                    <p className="text-lg mb-4">{ desc }</p>
                </div>
                <style>
                    { `
                
                .card:hover .img{
                   transform: scale(1.1);
                   filter: brightness(50%);
                }

                img {
                    transition-timing-function: ease-in;
                    transition-duration: .1s;
                }

                .smalldots {
                    left: 10%;
                    opacity: 0.3;
                }

                .card:hover .smalldots {
       
                    opacity: 1;
                    transition-delay: .1s;
                    transition-timing-function: ease-in;
                    transition-duration: .3s;
                }


                .txt {
                    transition: all .4s ease-in;
                    color: white;
                    z-index: 5;
                    width: 50%;
                }
                    `}
                </style>
            </div>



        </>
    );
};

export default Service;
