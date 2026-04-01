import React from "react";

const PricingSection = () => {
  return (
    <section className="  py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

       
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 mb-16">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

      
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-100 h-[448px] w-[380px] text-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-2">Starter</h3>
            <p className="text-gray-500 mb-6">Perfect for getting started</p>

            <h1 className="text-4xl font-bold mb-6">
              $0 <span className="text-lg font-medium text-gray-500">/Month</span>
            </h1>

            <ul className="space-y-3 text-left mb-8">
              <li>✓ Access to 10 free tools</li>
              <li>✓ Basic templates</li>
              <li>✓ Community support</li>
              <li>✓ 1 project per month</li>
            </ul>

            <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold">
              Get Started Free
            </button>
          </div>


         
          <div className="relative rounded-2xl p-2 bg-gradient-to-br from-purple-600 to-purple-800 h-[448px] text-white scale-105">

      
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-black text-sm px-4 py-1 rounded-full font-medium">
              Most Popular
            </span>

            <h3 className="text-2xl font-semibold mb-2">Pro</h3>
            <p className="text-gray-200 mb-6">Best for professionals</p>

            <h1 className="text-4xl font-bold mb-6">
              $29 <span className="text-lg font-medium">/Month</span>
            </h1>

            <ul className="space-y-3 text-left mb-8">
              <li>✓ Access to all premium tools</li>
              <li>✓ Unlimited templates</li>
              <li>✓ Priority support</li>
              <li>✓ Unlimited projects</li>
              <li>✓ Cloud sync</li>
              <li>✓ Advanced analytics</li>
            </ul>

            <button className="w-full  py-2 rounded-full bg-white text-purple-600 font-semibold">
              Start Pro Trial
            </button>
          </div>


         
          <div className="bg-gray-100 text-gray-800 rounded-2xl  w-[380px] h-[448px]">
            <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
            <p className="text-gray-500 mb-6">For teams and businesses</p>

            <h1 className="text-4xl font-bold mb-6">
              $99 <span className="text-lg font-medium text-gray-500">/Month</span>
            </h1>

            <ul className="space-y-3 text-left mb-8">
              <li>✓ Everything in Pro</li>
              <li>✓ Team collaboration</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ SLA guarantee</li>
              <li>✓ Custom branding</li>
            </ul>

            <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;