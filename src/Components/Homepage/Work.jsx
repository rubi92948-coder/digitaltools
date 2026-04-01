import React from 'react';

const Work = () => {
  return (
    <div className="bg-black py-20 flex justify-center items-center  bg-gradient-to-r from-indigo-600 to-purple-500"> 

      <div className="w-10/12 mx-auto text-center relative">

        {/* contant/text */}
        <div className="relative rounded-xl p-10">

          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-sm text-white/80 mt-3">
            Join thousands of professionals who are already using Digitools to work smarter.
            <br />
            Start your free trial today.
          </p>

          {/* last 2 button */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">

            <button className="px-6 py-2 rounded-full bg-white text-purple-600 font-medium hover:scale-105 transition">
              Explore Products
            </button>

            <button className="px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-purple-600 transition">
              View Pricing
            </button>

          </div>

          {/* contant/text */}
          <p className="text-xs text-white/70 mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>

        </div>
      </div>
    </div>
  );
};

export default Work;