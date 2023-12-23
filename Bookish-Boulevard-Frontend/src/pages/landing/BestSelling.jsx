
const BestSelling = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row h-[100vh] max-h-[1000px] border border-red-500 max-w-screen-2xl m-auto min-w-[360px]">
                <div className="w-full md:w-1/2 border border-red-500 h-[100%] flex justify-center items-center">
                    <div className="h-[80%] w-[65%] md:h-[502px] md:w-[313px] border border-red-500">

                    </div>
                </div>
                <div className="w-full md:w-1/2 border border-red-500 h-[100%] flex flex-col justify-center" >
                    <div className="h-full md:h-[502px] border border-red-500 flex flex-col justify-around items-center md:items-start">


                        <p className="md:text-[48px]">Best selling book</p>
                        <p className="md:text-[13px]">Author</p>
                        <p className="md:text-[28px] font-bold">Title</p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <p className="md:text-[23px]">999$</p>
                        <button className="border border-red-500 w-44">Shop It Now </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BestSelling;