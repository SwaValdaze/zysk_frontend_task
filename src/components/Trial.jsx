import React from 'react'

const Trial = () => {
  return (
    <section className="bg-slate-50">
    <div className="container w-11/12 mx-auto  py-10">
        <div className=" w-11/12 py-16 mx-auto">
        
        <h1 className="text-4xl md:text-4xl md:font-semibold lg:text-5xl font-medium text-zinc-800 text-center  py-1 ">Start your free trial</h1>
        <h3 className="text-lg font-normal md:text-xl  text-slate-600 text-center pt-3 ">Join over 4,000+startups already growing with Untitled.</h3>
        </div>

        <div className="flex flex-col md:flex-row-reverse md:gap-4 w-4/5  mx-auto justify-center items-center">
        <button className="flex rounded-md md:text-lg font-semibold  bg-red-600  md:px-10 px-44  py-3 hover:bg-purple-800 text-white text-nowrap" >Get Started
            </button>
            <button className=" items-center rounded-md md:text-lg  font-semibold border-2 mt-3 md:mt-0 bg-white text-slate-600 md:px-10 px-44 py-3  text-center text-nowrap" >Learn more
            </button>
        </div>

    </div>
    </section>
    
  )
}

export default Trial;