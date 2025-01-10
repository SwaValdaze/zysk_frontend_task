


import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import profilepic from '../assets/profilepic.png';
import blog from '../assets/blog.svg';
import sparkles from '../assets/sparkles.svg';
import demo from '../assets/demo.svg';
import viewprofile from '../assets/viewprofile.svg';
import  settings from '../assets/settings.svg';
import keyshort from '../assets/keyshort.svg';
import dot from '../assets/dot.svg';
import blog2 from '../assets/blog2.jpeg';
import companypro from '../assets/companypro.svg';
import team from '../assets/team.svg';
import invitecol from '../assets/invitecol.svg';
import changelog from '../assets/changelog.svg';
import slackcomm from '../assets/slackcomm.svg';
import support from '../assets/support.svg';
import api from '../assets/api.svg';
import logout from '../assets/logout.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="lg:w-11/12 flex flex-row lg:px-5 bg-white lg:mx-auto justify-between items-center top-0 py-5 border-b-2 border-slate-100 sticky z-10">
      <div className="flex flex-shrink-0 ml-2">
        <img src={logo} alt="Logo" />
      </div>

      {/* Menu for Desktop */}
      <div className="hidden md:flex md:w-4/5 md:mx-auto">
        <ul className="flex flex-row flex-1 gap-8">
          <li>
            <a className="md:text-lg md:font-semibold md:text-slate-600" href="">
              Home
            </a>
          </li>
          <li className="relative group">
            <a className="md:text-lg md:font-semibold md:text-slate-600" href="">
              Products &#11167; 
            </a>
            {/* Submenu */}
            <div className="absolute left-0 mt-2 w-max bg-white border border-slate-300 shadow-lg rounded-lg hidden group-hover:block p-5 z-20">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img src={blog} alt="Image 1" className="w-6 h-10 mr-3" />
                    <div>
                      <span className="block font-semibold text-slate-700">Blog</span>
                      <span className="block text-slate-500 text-sm text-wrap">The latest industry news, updates and info.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src={sparkles} alt="Image 2" className="w-6 h-10 mr-3" />
                    <div>
                      <span className="block font-semibold text-slate-700">Customer stories</span>
                      <span className="block text-slate-500 text-sm">Learn how our customers are making big changes.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src={demo} alt="Image 3" className="w-6 h-10 mr-3" />
                    <div>
                      <span className="block font-semibold text-slate-700">Video tutorials</span>
                      <span className="block text-slate-500 text-sm">Get up and running on new features and techniques.</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <img src={blog2} alt="Image 4" className="w-40 h-auto" />
                  <div>
                    <h1 className="text-xl text-gray-950 font-semibold">We've just released an update!</h1>
                    <p className="text-md text-slate-500 text-wrap">Check out the all new dashboard view. Pages now load faster.</p>
                  </div>
                  <div className="flex gap-7">
                    <a href="#" className="text-gray-800">
                      Dismiss
                    </a>
                    <a href="#" className="text-purple-800">
                      Changelog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a className="md:text-lg md:font-semibold md:text-slate-600" href="">
              Resources &#11167;
            </a>
            {/* Submenu */}
            <div className="absolute left-0 mt-2 w-max bg-white border border-slate-300 shadow-lg rounded-lg hidden group-hover:block p-5 z-20">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <img src={blog} alt="Image 1" className="w-6 h-10 mr-3" />
                    <div>
                      <span className="block font-semibold text-slate-700">Blog</span>
                      <span className="block text-slate-500 text-sm text-wrap">The latest industry news, updates and info.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src={sparkles} alt="Image 2" className="w-6 h-10 mr-3" />
                    <div>
                      <span className="block font-semibold text-slate-700">Customer stories</span>
                      <span className="block text-slate-500 text-sm">Learn how our customers are making big changes.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <img src={demo} alt="Image 3" className="w-6 h-10 mr-3" />
                    <div>
                      <span className="block font-semibold text-slate-700">Video tutorials</span>
                      <span className="block text-slate-500 text-sm">Get up and running on new features and techniques.</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <img src={blog2} alt="Image 4" className="w-40 h-auto" />
                  <div>
                    <h1 className="text-xl text-gray-950 font-semibold">We've just released an update!</h1>
                    <p className="text-md text-slate-500 text-wrap">Check out the all new dashboard view. Pages now load faster.</p>
                  </div>
                  <div className="flex gap-7">
                    <a href="#" className="text-gray-800">
                      Dismiss
                    </a>
                    <a href="#" className="text-purple-800">
                      Changelog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a className="md:text-lg md:font-semibold md:text-slate-600" href="">
              Pricing
            </a>
          </li>
        </ul>
      </div>


      <div className="relative group md:block hidden">
   <a href="">
     <img src={profilepic} alt="Profile" className="w-12 h-12 rounded-full cursor-pointer" />
   </a>

   <div className="profile-dropdown absolute right-0 mt-2 w-max bg-white border border-slate-300 shadow-lg rounded-lg hidden group-hover:block p-5 z-50">
    
    <div className="flex items-start gap-3 border-b-2 border-slate-100 py-2">
       <a href="">
         <img src={profilepic} alt="Profile Thumbnail" className="w-12 h-12 rounded-full" />
         <img src={dot} alt="" className="absolute  w-6 h-auto left-12 top-14"/>
      </a>
       <div>
         <h2 className="font-semibold text-gray-800">Olivia Rhye</h2>
         <h6 className="text-sm text-gray-500">oliviarhye@gmail.com</h6>
       </div>
    </div>

     <div className="flex items-start gap-3 pt-3 ">
       <a href="">
         <img src={viewprofile} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
       <div>
         <h2 className="font-semibold text-gray-800">View profile</h2>
       
       </div>
     </div>

     <div className="flex items-start gap-3 pt-3">
       <a href="">
        <img src={settings} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
      </a>
     <div>
         <h2 className="font-semibold text-gray-800">Settings</h2>
      
       </div>
    </div>

    <div className="flex items-start gap-3 border-b-2 border-slate-100 py-3">
     <a href="">
        <img src={keyshort} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
      </a>
      <div>
        <h2 className="font-semibold text-gray-800">Keyboard shortcuts</h2>
       
     </div>     </div>

    <div className="flex items-start gap-3 pt-3">
      <a href="">
        <img src={companypro} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
      </a>
   <div>
       <h2 className="font-semibold text-gray-800">Company profile</h2>
       
      </div>
     </div>

    <div className="flex items-start gap-3 pt-3">
      <a href="">
         <img src={team} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
       <div>
         <h2 className="font-semibold text-gray-800">Team</h2>
        
       </div>
     </div>

    <div className="flex items-start gap-3 border-b-2 border-slate-100 pb-2 pt-3">
      <a href="">
        <img src={invitecol} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
       <div>
         <h2 className="font-semibold text-gray-800">Invite colleagues</h2>
       
       </div>
     </div>

    <div className="flex items-start gap-3 pt-3">
      <a href="">
        <img src={changelog} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
      </a>
      <div>
         <h2 className="font-semibold text-gray-800">Change log</h2>
              </div>
     </div>

     <div className="flex items-start gap-3 pt-3">
       <a href="">
        <img src={slackcomm} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
       <div>
         <h2 className="font-semibold text-gray-800">Slack Community</h2>
        
       </div>
     </div>

     <div className="flex items-start gap-3 pt-3">
       <a href="">
         <img src={support} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
      <div>
        <h2 className="font-semibold text-gray-800">Support</h2>
       
       </div>
     </div>

     <div className="flex items-start gap-3 border-slate-100 border-b-2 pb-2 pt-3">
       <a href="">
         <img src={api} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
       <div>
         <h2 className="font-semibold text-gray-800">API</h2>
       
       </div>
     </div>

     <div className="flex items-start gap-3  pt-3 ">
       <a href="">
         <img src={logout} alt="Profile Thumbnail" className="w-6 h-auto rounded-full" />
       </a>
      <div>
        <h2 className="font-semibold text-gray-800">Log out</h2>
       
       </div>
     </div>

  </div>
</div>






      

      {/* Hamburger Menu for Mobile */}
      <div className="block md:hidden mr-2">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a className="text-lg font-semibold text-slate-600" href="">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg font-semibold text-slate-600" href="">
                Products
              </a>
            </li>
            <li>
              <a className="text-lg font-semibold text-slate-600" href="">
                Resources
              </a>
            </li>
            <li>
              <a className="text-lg font-semibold text-slate-600" href="">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
