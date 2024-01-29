import BoxBtn from './BoxBtn'
import ItemList from './ItemLists'

export default function Product() {
  return (
    <div className="w-[100%] bg-[#A7A7A7] overflow-y-auto h-[90%] flex flex-col gap-10">
      <div className='h-[20%] flex justify-around items-center mt-5'>
        <BoxBtn name={"Create new item"}/>        
        <BoxBtn name={"Update existing item"}/>
        <BoxBtn name={"Delete existing item"}/>
        <BoxBtn name={"Search item"}/>
      </div>
      <ItemList/>
    </div>
  )
}
