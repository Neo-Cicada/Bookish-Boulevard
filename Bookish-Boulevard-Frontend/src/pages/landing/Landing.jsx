import FeaturedBooks from "./FeaturedBooks";
import BestSelling from "./BestSelling";
import PopularBooks from "./PopularBooks";
import Quotes from "./Quotes";
import SaleBook from "./SaleBooks";

export default function Landing() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row h-[100vh] max-h-[1000px] border border-red-500 max-w-screen-2xl m-auto min-w-[360px]">

                <div className="flex flex-col justify-between md:justify-center items-center md:gap-5  w-full border border-red-500 h-[50%] md:h-[100%]">
                    <h1 className="font-extrabold md:text-[73px] text-center text-[30px]" >Book title</h1>
                    <p className="mx-10 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minima modi pariatur. Odio iure dolorum modi at ut esse omnis maxime a, assumenda quo ipsam, quisquam nisi deserunt ipsum. Nisi?
                    </p>
                    <button className="border border-gray-400 w-32 hover:border-none min-w-0 h-10 hover:bg-amber-800 hover:text-white">READ MORE</button>
                    <div></div>
                </div>
                <div className="w-full border border-red-500 h-[50%] flex items-center justify-center md:h-[100%]">
                    <div className="h-[80%] max-h-[500px] min-w-[250px] w-[40%] md:w-[50%] border border-red-500"></div>
                </div>
            </div>
            <FeaturedBooks />
            <BestSelling />
            <PopularBooks />
            <Quotes />
            <SaleBook />
        </>
    )
}
