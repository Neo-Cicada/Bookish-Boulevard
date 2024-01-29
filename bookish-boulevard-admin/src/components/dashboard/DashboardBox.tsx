
const DashboardBox: React.FC<{ name: string; numbers: number; chart: any }> = ({ name, numbers, chart }) => {
    return (
        <div className="h-[80%] w-[20%] rounded-lg bg-white flex justify-between px-5 items-center">
            <div className="flex flex-col">
                <p className="text-[#8E95A9]">{name}</p>
                <p className="text-[#1C2A53] text-3xl font-semibold">{numbers}</p>
            </div>
            <div className="text-3xl font-semibold text-lime-600">{chart}</div>
        </div>
    )
}
export default DashboardBox;
