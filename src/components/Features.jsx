import React from 'react';
import command from '../assets/command.png';
import zap from '../assets/zap.png';
import messagesmilecircle from '../assets/messagesmilecircle.png';
import messageheartcircle from '../assets/messageheartcircle.png';
import messagechatcircle from '../assets/messagechatcircle.png';
import chartbreakoutsquare from '../assets/chartbreakoutsquare.png';




const Features = () => {
  return (
    <div className="container  mt-12 w-11/12 items-center justify-center mx-auto border-t-2 border-slate-100">
        <h3 className="pt-12 md:pt-16 text-center text-red-600 font-semibold md:text-xl">Features</h3>
           {/* feature content */}
        <div className="">
        <h1 className="py-3 md:text-4xl text-4xl font-semibold text-center text-slate-900">Analytics that feels like it's from the future</h1>
        </div>

        <div className="md:w-3/5 mx-auto">
       <h4 className="text-lg font-normal text-center text-slate-600 py-4 px-10 lg:text-wrap md:text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups</h4>
       </div>

       {/* feature cards */}
       <div className="flex lg:pr-4 md:grid md:grid-rows-3 md:grid-cols-2 md:gap-5 lg:grid-rows-2 lg:grid-cols-3 lg:flex-row flex-col justify-center items-center w-4/5 md:w-full lg:w-full mx-auto mt-2 mb-20">

        <div className="card w-11/12 mt-10 mx-auto">
            <div className="img-card mx-auto w-12  ">
                <img src={messagechatcircle} alt="" />
            </div>
            <div className="feature-content">
            <h1 className="py-3 lg:text-2xl text-xl font-semibold text-center text-slate-900">Share team inboxes</h1>
            <h4 className="text-lg lg:text-lg font-normal text-center text-slate-500 py-1 ">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</h4>

            </div>
        </div>

        <div className="card w-11/12 mt-10 mx-auto">
            <div className="img-card mx-auto w-12  ">
                <img src={zap} alt="" />
            </div>
            <div className="feature-content">
            <h1 className="py-3 lg:text-2xl text-xl font-semibold text-center text-slate-900">Deliver instant answers</h1>
            <h4 className="text-lg lg:text-lg font-normal text-center text-slate-500 py-1  ">An all-in-one customer service platform that helps you balance everythng your customers need to be happy.</h4>

            </div>
        </div>

        <div className="card w-11/12 md:w-full mt-10 mx-auto">
            <div className="img-card mx-auto w-12  ">
                <img src={chartbreakoutsquare} alt="" />
            </div>
            <div className="feature-content">
            <h1 className="py-3 lg:text-2xl text-xl font-semibold text-center text-slate-900">Manage your team with reports</h1>
            <h4 className="text-lg lg:text-lg font-normal text-center text-slate-500 py-1 ">Measure what matters with Untitled's easy-to-use reports.  You can filter, export, and drilldown on the data in a couple clicks.</h4>

            </div>
        </div>

        <div className="card w-11/12 mt-10 mx-auto">
            <div className="img-card mx-auto w-12  ">
                <img src={messagesmilecircle} alt="" />
            </div>
            <div className="feature-content">
            <h1 className="py-3 lg:text-2xl text-xl font-semibold text-center text-slate-900">Connect with customers</h1>
            <h4 className="text-lg lg:text-lg font-normal text-center text-slate-500 py-1  ">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</h4>

            </div>
        </div>

        <div className="card w-11/12 mt-10 mx-auto">
            <div className="img-card mx-auto w-12  ">
                <img src={command} alt="" />
            </div>
            <div className="feature-content">
            <h1 className="py-3 lg:text-2xl text-xl font-semibold text-center text-slate-900">Connect with tools you already use</h1>
            <h4 className="text-lg lg:text-lg font-normal text-center text-slate-500 py-1  ">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar.  Plus, our extensive developer tools.</h4>

            </div>
        </div>

        <div className="card w-11/12 mt-10 mx-auto">
            <div className="img-card mx-auto w-12  ">
                <img src={messageheartcircle} alt="" />
            </div>
           <div className="feature-content">
            <h1 className="py-3 lg:text-2xl text-xl font-semibold text-center text-slate-900">Our people make the difference</h1>
            <h4 className="text-lg lg:text-lg font-normal text-center text-slate-500 py-1 ">We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</h4>
            </div>
            
        </div>
       </div>


    </div>
  )
}

export default Features;