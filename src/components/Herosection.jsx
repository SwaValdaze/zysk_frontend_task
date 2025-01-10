import React from 'react';
import image1 from '../assets/image1.png';
import logo1 from '../assets/logo1.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo2 from '../assets/logo2.png';
import demo1 from '../assets/demo1.svg';
import heroarr from '../assets/heroarr.svg'


const Herosection = () => {
    return (
      <div className="container bg-white pt-10  mt-10 w-full mx-auto items-center justify-center pb-12">
        <div className=" rounded-full bg-purple-300 lg:bg-orange-200 lg:bg-opacity-15 bg-opacity-15 border-purple-200 border-2 lg:border-orange-300 text-white flex items-center mx-auto w-8/12 md:4/12 lg:w-1/4 md:px-10 lg:px-2  px-2 py-1 text-nowrap h-8">
       
          <div className="bg-white text-orange-500 border-purple-200 lg:border-orange-500 border-2 rounded-full float-left lg:px-3 px-5 py-1 h-6 lg:h-6   text-xs font-semibold ">
            New feature
          </div>
  
     
          <div className="flex  flex-row  ml-3 float-right">
            <h6 className="flex-auto text-xs font-semibold truncate text-orange-500 lg:text-xs">
              Check out the team dashboard
            </h6>
            <span className="flex text-sm ml-2 items-end"><img src={heroarr} alt="" /></span> {/* Arrow */}
          </div>
        </div>

        {/* text-content */}
        <div className="container w-10/12 mx-auto mt-5">
        <div className="">
        <h1 className="text-5xl font-semibold text-center">Beautiful analytics to grow smarter</h1>
        </div>
       <div className="lg:w-3/5 mx-auto">
       <h4 className="text-lg font-normal text-center text-zinc-900 mt-8 lg:text-wrap">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups</h4>
       </div>
       
        </div>
        {/* button-content */}

        <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse mt-8 mx-auto w-10/12 md:gap-4 lg:gap-4 md:justify-center md:items-center lg:justify-center lg:items-center">
        <button className="flex rounded-full items-center justify-center bg-red-600 text-white px-8 py-4 lg:py-3 text-center hover:bg-purple-700 font-semibold" >Sign up
            </button>
            <button className="flex items-center justify-center rounded-full border-2 mt-3 md:mt-0 lg:mt-0 text-black px-8 py-4 lg:py-3  font-semibold text-center  " > <img className="" src={demo1} alt="  " />  &#160; Demo
             
            </button></div>

          {/* image-content */}
            <div className="mt-10 mx-auto w-10/12 sm:w-4/5 border-black border-4 rounded-md ">
            <img src={image1} alt="" />
            </div>

            {/* customer-companies */}

            <div className=" container w-5/6 mt-10 mx-auto">
            <div className="">
                <h3 className="text-lg font-normal text-center">Join 4,000+ companies already growing</h3>
            </div>
            <div className="  flex md:w-full lg:full w-4/5 mx-auto justify-center items-center mt-10">
  <ul className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:gap-7 md:flex md:flex-row md:gap-7 px-14">
    {/* Logo 1 */}
    <li>
      <img src={logo3} alt="Logo 3" className="w-full h-auto" />
    </li>
    {/* Logo 2 */}
    <li>
      <img src={logo1} alt="Logo 1" className="w-full h-auto" />
    </li>
    {/* Logo 3 */}
    <li>
      <img src={logo2} alt="Logo 4" className="w-full h-auto" />
    </li>
    {/* Logo 4 */}
    <li>
      <img src={logo4} alt="Logo 4" className="w-full h-auto" />
    </li>
    {/* Logo 5 */}
    <li>
      <img src={logo5} alt="Logo 4" className="w-full h-auto" />
    </li>
    {/* Logo 6 */}
    <li>
      <img src={logo6} alt="Logo 4" className="w-full h-auto" />
    </li>
  </ul>
</div>

            
            
            </div>
      </div>
     
    // image-content
    

      
    );
  };
  
  export default Herosection;
  

