import React from "react"
import { faWonSign } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchCard = () => {
    return (
        <div className='flex justify-center bg-sky-600 py-24'>
            <div>
                <h1 className='text-4xl font-extrabold text-white '>169+ Free HTML Website Templates</h1>

                <form className="w-full max-w-2xl mx-auto mt-6">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 bg-gray-50" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-sky-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default SearchCard
