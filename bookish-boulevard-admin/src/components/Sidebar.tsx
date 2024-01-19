import { Link } from "react-router-dom"
export default function Sidebar() {
  return (
    <div className="w-[15%] border bg-[#EDEDED] border-red-500 h-[100vh] flex flex-col justify-between">
        <h1>Logo</h1>

        <ul className="flex flex-col items-center justify-between h-[70%] border border-red-500">
            <Link to="/" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Dashboard    </Link>
            <Link to="product" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Product      </Link>
            <Link to="customer" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Customer     </Link>
            <Link to="orders" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Orders       </Link>
            <Link to="shipment" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Shipments    </Link>
            <Link to="transactions" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">transactions </Link>
            <Link to="settings" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">settings     </Link>
            <Link to="logout" className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">logout       </Link>
        </ul>

        <div></div>
    </div>
  )
}
