
import smallDots from "../assets/dots-grid_small.svg"


const Service = (props) => {
    const { headImg, title, desc, col, dir, txthead, txtbody } = props;
    console.log(props)

    return (
        <>
            <div className={ `card grid text-left min-w-xs m-auto  h-2/3 sm:flex snap-center hover: snap-always ${col} w-screen ${dir}` }>

                <div className={ `img hidden sm:block sm:grayscale hover:grayscale-0 sm:brightness-50 sm:hover:brightness-100 sm:w-1/3 transition-all h-full ` } style={ {
                    background: `url(${headImg}) no-repeat center center / cover`,


                } }>
                    {/* <img className="w-full" src={ headImg } alt="Descriptive image" /> */ }
                </div>
                {/* 
                <img src={ smallDots } alt="dots grid" className="smalldots" /> */}



                <div className={ `
                flex-1 
                 grid place-items-center`}>
                    <div>

                        <h3 className={ `text-2xl ${txthead} sm:font-extrabold font-bold sm:text-4xl  capitalize text-amber-500` }>{ title }</h3>
                        <p className={ `text-lg sm:text-4xl mb-4 ${txtbody}` }>{ desc }</p>
                    </div>
                </div>
                <style>
                    {
                        `
                        .card:hover .img{
                            filter: brightness(100%)
                            filter: grayscale(0)
                        }

                        .img {
                            background: url(${headImg}) no-repeat center center / cover
                        }
                        `
                    }
                </style>
            </div >



        </>
    );
};

export default Service;
