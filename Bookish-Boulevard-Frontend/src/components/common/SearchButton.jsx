
export default function SearchButton() {
    return (
        <div>
            <form className='flex w-full'>
                <div className='flex'>
                    <input className='w-3/4 pl-[1rem] pr-[1rem] border border-none' placeholder='Search' type='search' />
                    <button type='submit' className='ml-2 border border-red-500 rounded-lg'>Search</button>
                </div>
            </form>
        </div>
    )
}
