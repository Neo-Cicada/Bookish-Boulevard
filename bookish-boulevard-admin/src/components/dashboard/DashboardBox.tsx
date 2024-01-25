
const DashboardBox: React.FC<{ name: string; numbers: number; chart: any }> = ({ name, numbers, chart }) => {
    return (
        <div className="border border-red-500 h-[80%] w-[20%] rounded-lg bg-white flex justify-between px-5 items-center">
            <div className="flex flex-col">
                <p>{name}</p>
                <p>{numbers}</p>
            </div>
            <div>{chart}</div>
        </div>
    )
}
export default DashboardBox;
