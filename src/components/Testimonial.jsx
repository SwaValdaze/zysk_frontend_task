import React from 'react'
import Logomark from '../assets/Logomark.png';
import Logotype from '../assets/Logotype.png';
import Avatar6 from '../assets/Avatar6.png'

const Testimonial = () => {
  return (
    <section className="bg-slate-50 ">
    <div className="py-20 container w-10/12 mx-auto border-b-2">
        <div className=" py-5 flex  w-4/5 lg:w-full md:w-full mx-auto gap-3 items-center justify-center">
            <img src={Logomark} alt="" />
            <img src={Logotype} alt="" />
        </div>

        <h1 className="py-3 text-4xl lg:text-5xl font-semibold text-center text-gray-800 lg:text-wrap">We've been using Untitled to kick start every new project and can't imagine working without it.</h1>
        <div className="w-16 mx-auto pt-9">
            <img src={Avatar6} alt="" className="w-12 h-12 rounded-full"/>
        </div>
        <div className="">
        <h1 className="pt-3  text-xl text-gray-800 lg:text-xl font-bold text-center">Candice Wu</h1>
        <h4 className="text-lg lg:text-xl font-normal text-center text-slate-500 py-1 ">Product Manager, Sisyphus</h4>

        </div>

    </div>
    </section>
  )
}

export default Testimonial;