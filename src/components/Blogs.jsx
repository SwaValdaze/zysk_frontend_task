import React from 'react'
import blog1 from '../assets/blog1.jpeg'
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';
import profilepic from '../assets/profilepic.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import blogarr from '../assets/blogarr.svg'

const Blogs = () => {
  return (

    <div className="container   mt-10 w-11/12 mx-auto py-16 border-t-2 border-slate-100">
        {/* blog header */}
        <div className="blog-header w-11/12 py-12 ml-5">
        <h4 className="text-sm lg:text-xl font-semibold text-red-500  py-1 ">Our blog</h4>
        <h1 className="text-4xl lg:text-4xl md:font-semibold font-medium text-gray-950 md:py-2 py-1 ">Latest Blogs Posts</h1>
        <h3 className="text-lg md:text-xl font-normal text-slate-600 md:py-6 py-1 ">Tool and strategies modern teams need to help their companies grow.</h3>
        </div>
{/* blog cards */}
        <div className="flex flex-col w-11/12 md:w-full lg:w-full mx-auto md:flex-row lg:flex-row ">

        {/* blog-card-1 */}
       <div className="py-5">
                <div className="  flex  justify-center items-center card w-11/12 h-60 mx-auto">
                        <img className="h-auto max-w-full" src={blog1} alt="Blog" />
                </div>
                <div className="w-11/12 mx-auto">
                        <div className="relative">
                        <h4 className="text-sm md:text-lg font-medium text-red-500 md:pt-7 pt-8 ">Design </h4><img className="absolute top-7 right-0" src={blogarr} alt="" />
                        </div>
                        <h1 className="text-3xl font-medium text-gray-950  pt-2 ">UX review presentations</h1>
                        <h3 className="text-lg md:text-lg font-normal text-slate-600  pt-2">How do you create compelling presentations that wow your colleagues and impress yours managers?</h3>
                </div>


                <div className="w-11/12 mx-auto py-5 flex flex-row gap-3">
                        <div className="flex justify-start w-16 ">
                                <img src={profilepic} alt="" className="rounded-full" />
                        </div>
                        <div className="flex flex-col">
                                <h3 className="text-md  font-semibold text-zinc-800 pt-3 ">Olivia Rhye</h3>
                                <h3 className="text-md  font-normal   text-slate-600 pt-0">20 Jan 2024</h3>

                        </div>
                </div>
        </div>

        {/* blog-card-2 */}

        <div className=" py-5">
        <div className="flex justify-center items-center card w-11/12 h-60 mx-auto">
  <img className="h-auto max-w-full" src={blog2} alt="Blog" />
</div>
<div className="w-11/12 mx-auto">
<div className="relative">
                        <h4 className="text-sm md:text-lg font-medium text-red-500 md:pt-7 pt-8 ">Product</h4><img className="absolute top-7 right-0" src={blogarr} alt="" />
                        </div>
        <h1 className="text-3xl font-medium text-gray-950  pt-2">Migrating to Linear 01</h1>
        <h3 className="text-lg  font-normal text-slate-600  pt-2">Linear helps streamline projects, sprints, tasks, and bug tracking. Here's how to get started.</h3>
</div>


<div className="w-11/12 mx-auto py-5 flex flex-row gap-3">
<div className="flex justify-start  w-16">
    <img src={Avatar4} alt="" className="rounded-full"/>
</div>
<div className="flex flex-col">
<h3 className="text-md  font-semibold text-zinc-800 pt-3 ">Phoenix Baker</h3>
<h3 className="text-md  font-normal  text-slate-600  pt-0">19 Jan 2024</h3>

</div>
</div>

        

        
        </div>

        {/* blog-card-3 */}

        <div className="py-5">
        <div className="flex justify-center items-center card w-11/12 h-60 mx-auto">
  <img className="h-auto max-w-full" src={blog3} alt="Blog" />
</div>
<div className="w-11/12 mx-auto">
<div className="relative">
                        <h4 className="text-sm md:text-lg font-medium text-red-500 md:pt-7 pt-8 ">Software Engineering</h4><img className="absolute top-7 right-0" src={blogarr} alt="" />
                        </div>
        <h1 className="text-3xl font-medium text-gray-950  pt-2">Building your API Stack</h1>
        <h3 className="text-lg  font-normal text-slate-600  pt-2">The rise of RESTful API has been met by a rise in tools for testing, creating and managing them.</h3>
</div>


<div className="w-11/12 mx-auto py-5 flex flex-row gap-3">
<div className="flex justify-start w-16 ">
    <img src={Avatar5} alt="" className="rounded-full"/>
</div>
<div className="flex flex-col">
<h3 className="text-md  font-semibold text-zinc-800  pt-3 ">Lana Steinder</h3>
<h3 className="text-md font-normal  text-slate-600 pt-0">18 Jan 2024</h3>

</div>
</div>

        

        
        </div>
        </div>

        <div className="flex justify-center items-center w-4/5 mx-auto md:mt-4">
    <button className=" bg-red-600 rounded-md md:py-4 md:px-10 px-44 py-2 hover:bg-violet-800 text-white font-semibold text-nowrap">View more posts</button>
    </div>

        </div>
  )
}

export default Blogs;