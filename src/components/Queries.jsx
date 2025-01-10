import React from 'react'
import avagroup from '../assets/avagroup.png'

const Queries = () => {
  return (
<div className="w-4/5 py-16 mx-auto bg-slate-50 rounded-md">
    <div className="w-32 mx-auto pt-9">
        <img src={avagroup} alt=""  className="w-32 h-auto"/>
    </div>
    <div className="w-4/5 mx-auto ">
    <h1 className="pt-3  text-xl md:text-2xl font-semibold text-center text-gray-900">Still have questions?</h1>
     <h4 className="text-lg md:text-xl font-normal text-center text-slate-600 pt-3 pb-5 ">Can't find the answer you're looking for? Please chat to our friendly team.</h4>
    </div>
    <div className="flex justify-center items-center">
    <button className=" bg-red-600 rounded-md px-7 py-3 hover:bg-violet-800 text-white md:text-lg font-semibold">Get in touch</button>
    </div>

    
    </div>

    
  )
}

export default Queries;