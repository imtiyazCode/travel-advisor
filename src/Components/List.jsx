import React, { useState } from 'react'
import PlaceDetails from './PlaceDetails';

const List = ({places}) => {
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");

    return (
        <div className="p-3">
            <h2 className='m-0 font-medium'>Restaurants, Hotels, & Attraction Around You</h2>
            <div className="flex flex-wrap md:mt-3">
                <div className="formControl flex flex-col p-1 mr-5">
                    <label htmlFor="type" className='mr-2 text-xs text-slate-600 font-medium'>Type :</label>
                    <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}
                            className="outline-none border border-t-0 border-l-0 border-r-0 px-3 py-1.5 text-gray-700 rounded" >
                        <option value="restaurants" className='p-1'>Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>
                <div className="formControl flex flex-col p-1 mr-2">
                    <label htmlFor="rating" className='mr-2 text-xs text-slate-600 font-medium'>Rating :</label>
                    <select name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating"
                            className="outline-none border border-t-0 border-l-0 border-r-0 px-3 py-1.5 text-gray-700 rounded">
                        <option value={0} >All</option>
                        <option value={3} >Above 3.0</option>
                        <option value={4} >Above 4.0</option>
                        <option value={4.5} >Above 4.5</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-12 mt-2 p-3 pb-0 h-[67vh] overflow-auto">
                {   places?.map( (place, i) => (
                    <div className="col-span-12" key={i}>
                        <PlaceDetails place={place}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List