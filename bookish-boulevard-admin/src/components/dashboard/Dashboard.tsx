import BestSeller from "./BestSeller";
import Cart from "./Cart";
import DashboardBox from "./DashboardBox";
import IncomeChart2Weeks from "./IncomeChart2Weeks";
import LatestOrder from "./LatestOrder";
import SalesForcast from "./SalesForcast";

export default function Dashboard() {
  return (
    <div className="w-[100%] bg-[#A7A7A7] overflow-y-auto h-[90%] flex flex-col gap-10">
      <div className="flex items-center justify-around min-h-32">
        <DashboardBox name="Revenue" numbers={111} chart={'100%'} /> 
        {/* TODO Chart */}
        <DashboardBox name="Orders" numbers={111} chart={'100%'} />
        <DashboardBox name="Visitors" numbers={111} chart={'100%'} />
        <DashboardBox name="Conversion" numbers={111} chart={'100%'} />
      </div>
      <div className="flex items-center justify-around">
        <IncomeChart2Weeks />
        <Cart />
      </div>
      <div className="flex items-center justify-around">
        <BestSeller />
        <SalesForcast />
      </div>
      <div className="flex items-center justify-around">
        <LatestOrder/>
      </div>
    </div>
  )
}
