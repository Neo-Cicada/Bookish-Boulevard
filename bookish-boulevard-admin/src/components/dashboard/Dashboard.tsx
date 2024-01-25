import DashboardBox from "./DashboardBox";

export default function Dashboard() {
  return (
    <div className="w-[100%] bg-[#A7A7A7] h-[90%]">
      <div className="flex items-center justify-around h-32 border border-red-500">
        <DashboardBox name="Revenue" numbers={111} chart={'stoink'}/>
        <DashboardBox name="Orders" numbers={111} chart={'stoink'}/>
        <DashboardBox name="Visitors" numbers={111} chart={'stoink'}/>
        <DashboardBox name="Conversion" numbers={111} chart={'stoink'}/>

      </div>
    </div>
  )
}
