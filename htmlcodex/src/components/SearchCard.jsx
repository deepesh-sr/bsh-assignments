import React from 'react'

const SearchCard = () => {
    return (
        <div className='flex-col justify-center p-30'>
            <div className='flex justify-center'>

            <h1>169+ Free HTML Website Templates</h1>
            <div className='flex'>
                <input type="text" placeholder='e.g business template' className='px-5' />
                <button className='flex px-1 gap-1'>
                    <img src="src/assets/search-solid.svg" alt="search-icon" className='w-4'/>
                    Search
                </button>
            </div>

            </div>
        </div>
    )
}

export default SearchCard
