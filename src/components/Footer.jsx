
    import React from 'react';
    import badge1 from '../assets/badge1.png'
    import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className="container w-11/12 mx-auto py-10 ">
    
      <div className="grid grid-cols-2 grid-rows-3 lg:grid-cols-6 lg:grid-rows-0 md:grid-cols-3 md:grid-rows-2 gap-8 pb-10 lg:pb-0 my-auto">
   
        <div>
          <div className="header">
            <h5 className="font-semibold text-md mb-4  text-gray-500">Product</h5>
          </div>
          <ul className="space-y-2 text-lg font-semibold text-zinc-700">
            <li>Overview</li>
            <li>Features</li>
            <div className="relative">
            <li>Solutions 
            <img src={badge1} alt="" className="w-10 h-auto absolute top-1 left-20" />
            </li>
            </div>
            
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Second Section */}
        <div>
          <div className="header">
            <h5 className="font-semibold text-md mb-4 text-gray-500">Company</h5>
          </div>
          <ul className="space-y-2 text-lg font-semibold text-zinc-700">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <div className="header">
            <h5 className="font-semibold text-md mb-4 text-gray-500">Resources</h5>
          </div>
          <ul className="space-y-2 text-lg font-semibold text-zinc-700">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help Centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <div className="header">
            <h5 className="font-semibold text-md mb-4 text-gray-500">Use cases</h5>
          </div>
          <ul className="space-y-2 text-lg font-semibold text-zinc-700">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS Centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
            
          </ul>
        </div>

        <div>
          <div className="header">
            <h5 className="font-semibold text-md mb-4 text-gray-500">Social</h5>
          </div>
          <ul className="space-y-2 text-lg font-semibold text-zinc-700">
          <li>Twitter</li>
            <li>Linkedin</li>
            <li>Facebook</li>
            <li>Github</li>
            <li>AngelList</li>
            <li>Dribble</li>
          </ul>
        </div>

        <div>
          <div className="header">
            <h5 className="font-semibold text-md mb-4 text-gray-500 ">Legal</h5>
          </div>
          <ul className="space-y-2 text-lg font-semibold text-zinc-700">
          <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>
      <hr />
      <div className="flex flex-col md:flex-row lg:flex-row my-4 gap-4 justify-between">
        <img src={logo} alt="" className="w-20 h-auto"/>
        <h3 className="text-gray-700">&#169; 2077 zysktechnologies. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;

 