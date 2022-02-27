import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Autocomplete } from '@react-google-maps/api'

const style = {
    toobar: `flex justify-between bg-[#1a8d8d] px-3 text-white`,
    autoC: `relative h-8 bg-[#41a3a3] active:bg-[#008282] hover:bg-[#008282] mr-2 ml-0 sm:ml-3 sm:w-auto my-4 rounded-sm`,
    icon: `absolute top-[50%] translate-y-[-50%] translate-x-2`,
    serachInput: `bg-transparent outline-none border-none text-white pl-8 placeholder:text-white my-2`
}

const Header = ({ setCordinates }) => {
    const [autoComplete, setAutoComplete] = useState(null);
    const onLoad = (autoC) => {
        setAutoComplete(autoC)
    }
    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lng();

        setCordinates({ lat, lng })
    }
    return (
        <div className="header static">
            <div className={style.toobar}>
                <h3 className='hidden sm:block'>Travel Advisor</h3>
                <div className="Box flex">
                    <h4 className='hidden sm:block'>Explore New places</h4>
                    <div className="mr-2">
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} className={style.autoC}>
                            <div className="searchBar">
                                <div className={style.icon}><AiOutlineSearch /></div>
                                <input className={style.serachInput} type="text" placeholder='Search...' />
                            </div>
                        </Autocomplete>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;