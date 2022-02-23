import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Autocomplete } from '@react-google-maps/api'

const Header = () => {
  return (
    <div className="header static">
        <div className="toolbar flex justify-between bg-blue-800 px-3 text-white">
            <h3 className='hidden sm:block'>Travel Advisor</h3>
            <div className="Box flex">
                <h4 className='hidden sm:block'>Explore New places</h4>
                {/* <Autocomplete> */}
                    <div className="searchBar flex relative mr-2 ml-0 sm:ml-3 sm:w-auto my-4 rounded-sm bg-blue-700 active:bg-blue-900 hover:bg-blue-900 ">
                        <div className="absolute top-[50%] translate-y-[-50%] translate-x-2"><AiOutlineSearch /></div>
                        <input className='bg-transparent outline-none border-none text-white pl-8 placeholder:text-white py-2 sm:py-0' type="text" placeholder='Search...' />
                    </div>
                {/* </Autocomplete> */}
            </div>
        </div>
    </div>
  )
}

export default Header;