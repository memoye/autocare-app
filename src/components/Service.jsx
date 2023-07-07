const Service = (props) => {
    const { headImg, title, desc } = props;
    console.log(props);
    return (
        <>
            <div className="text-center min-w-xs m-auto mb-2 bg-slate-400 p-2 sm:h-70 sm:w-96 sm:h-96">
                <div className="bg-red-500 p-3">
                    <img className="m-auto" src={ headImg } alt="Descriptive image" />
                </div>
                <h3 className="text-2xl font-semibold text-blue-950">{ title }</h3>
                <p className="text-lg mb-4">{ desc }</p>
            </div>
        </>
    );
};

export default Service;
