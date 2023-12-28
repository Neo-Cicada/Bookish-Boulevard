
const FeaturedBooks = ({ title = "Featured Books" }) => {
    return (
        <>
            <div className="h-[100vh] max-h-[1000px] border border-red-500 max-w-screen-2xl m-auto min-w-[360px] ">
                <p className="h-[10%] text-center font-extrabold md:text-[47px] text-[30px]">{title}</p>
                <div className="h-[82%] md:flex md:justify-around items-center ">
                    <div className="h-1/4 md:h-[437px] border border-red-500 md:w-52 flex flex-row md:flex-col">

                        <div className="border border-red-500 w-[60%] md:w-full md:h-[60%] flex items-center justify-center">
                            <div className="border border-red-500 h-[95%] md:h-[90%] md:w-[90%]">
                                BOOK COVER
                            </div>
                        </div>
                        <div className="border border-red-500 w-[60%] md:w-full md:h-[40%] flex flex-col justify-around items-center">
                            <p>Once upon a time</p>
                            <p>Klien Marry</p>
                            <p>1000</p>
                        </div>

                    </div>
                    <div className="h-1/4 md:h-[437px] border border-red-500 md:w-52 flex flex-row md:flex-col">

                        <div className="border border-red-500 w-[60%] md:w-full md:h-[60%] flex items-center justify-center">
                            <div className="border border-red-500 h-[95%] md:h-[90%] md:w-[90%]">
                                BOOK COVER

                            </div>
                        </div>
                        <div className="border border-red-500 w-[60%] md:w-full md:h-[40%] flex flex-col justify-around items-center">
                            <p>Once upon a time</p>
                            <p>Klien Marry</p>
                            <p>1000</p>
                        </div>

                    </div>
                    <div className="h-1/4 md:h-[437px] border border-red-500 md:w-52 flex flex-row md:flex-col">

                        <div className="border border-red-500 w-[60%] md:w-full md:h-[60%] flex items-center justify-center">
                            <div className="border border-red-500 h-[95%] md:h-[90%] md:w-[90%]">
                                BOOK COVER

                            </div>
                        </div>
                        <div className="border border-red-500 w-[60%] md:w-full md:h-[40%] flex flex-col justify-around items-center">
                            <p>Once upon a time</p>
                            <p>Klien Marry</p>
                            <p>1000</p>
                        </div>

                    </div>
                    <div className="h-1/4 md:h-[437px] border border-red-500 md:w-52 flex flex-row md:flex-col">

                        <div className="border border-red-500 w-[60%] md:w-full md:h-[60%] flex items-center justify-center">
                            <div className="border border-red-500 h-[95%] md:h-[90%] md:w-[90%]">
                                BOOK COVER
                            </div>
                        </div>
                        <div className="border border-red-500 w-[60%] md:w-full md:h-[40%] flex flex-col justify-around items-center">
                            <p>Once upon a time</p>
                            <p>Klien Marry</p>
                            <p>1000</p>
                        </div>

                    </div>

                </div>
                <div className="h-[8%] flex justify-center items-center">
                    <button className="border border-gray-400 w-32 hover:border-none min-w-0 h-10 hover:bg-amber-800 hover:text-white">View More</button>
                </div>
            </div>

        </>
    )
}

export default FeaturedBooks;