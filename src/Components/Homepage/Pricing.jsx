
import React from 'react';

const Pricing = () => {
  return (
    <div className="py-16 px-4 w-10/12 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

       {/* fast card */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Starter</h3>
          <p className="text-sm text-gray-400 mb-4">Perfect for getting started</p>

          <h2 className="text-3xl font-bold">
            $0<span className="text-sm font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Access to 10 free tools</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Basic templates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Community support</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>1 project per month</span>
            </li>
          </ul>

          <button className=" mt-10 md:mt-auto w-full bg-purple-600 text-white py-2 rounded-full">
            Get Started Free
          </button>
        </div>

        {/* 2nd cart */}
        <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl p-6 shadow-lg scale-105 flex flex-col space-y-5">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
            Most Popular
          </span>

          <h3 className="text-lg font-semibold">Pro</h3>
          <p className="text-sm opacity-80 mb-4">Best for professionals</p>

          <h2 className="text-3xl font-bold">
            $29<span className="text-sm font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-300">✔</span>
              <span>Access to all premium tools</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✔</span>
              <span>Unlimited templates</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✔</span>
              <span>Priority support</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✔</span>
              <span>Unlimited projects</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✔</span>
              <span>Cloud sync</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-300">✔</span>
              <span>Advanced analytics</span>
            </li>
          </ul>

          <button className="mt-auto w-full bg-white text-purple-600 py-2 rounded-full font-semibold">
            Start Pro Trial
          </button>
        </div>

       {/* 3rd card */}
        <div className="bg-gray-100 rounded-xl p-6 shadow-md flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">Enterprise</h3>
          <p className="text-sm text-gray-400 mb-4">For teams & businesses</p>

          <h2 className="text-3xl font-bold">
            $99<span className="text-sm font-normal">/Month</span>
          </h2>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Team collaboration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Custom integrations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Dedicated support</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>SLA guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✔</span>
              <span>Custom branding</span>
            </li>
          </ul>

          <button className="mt-10 md:mt-auto w-full bg-purple-600 text-white py-2 rounded-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
