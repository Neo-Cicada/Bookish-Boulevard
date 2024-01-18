
export default function Sidebar() {
  return (
    <div className="w-[15%] border bg-[#EDEDED] border-red-500 h-[100vh] flex flex-col justify-between">
        <h1>Logo</h1>

        <ul className="flex flex-col items-center justify-between h-[70%] border border-red-500">
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Dashboard</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Product</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Customer</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Orders</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">Shipments</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">transactions</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">settings</li>
            <li className="w-full pl-10 cursor-pointer hover:text-[#FFC42A]">logout</li>
        </ul>

        <div></div>
    </div>
  )
}
