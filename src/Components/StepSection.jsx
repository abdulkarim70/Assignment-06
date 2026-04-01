import React from "react";
import UserImage from '../assets/user.png'
import PackageImage from '../assets/package.png'
import RocketImage from '../assets/rocket.png'
const StepSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#101727] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <div className="relative bg-white rounded-2xl shadow-sm p-10 hover:shadow-lg transition">
            <span className="absolute top-5 right-5 bg-purple-600 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full">
              01
            </span>

            <div className="w-20 h-20 mx-auto bg-purple-100 flex items-center justify-center rounded-full mb-6 text-3xl">
              <img src={UserImage} alt="" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Create Account
            </h3>

            <p className="text-gray-500 text-sm">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-2xl shadow-sm p-10 hover:shadow-lg transition">
            <span className="absolute top-5 right-5 bg-purple-600 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full">
              02
            </span>

            <div className="w-20 h-20 mx-auto bg-purple-100 flex items-center justify-center rounded-full mb-6 text-3xl">
            <img src={PackageImage} alt="" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Choose Products
            </h3>

            <p className="text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-2xl shadow-sm p-10 hover:shadow-lg transition">
            <span className="absolute top-5 right-5 bg-purple-600 text-white text-sm w-10 h-10 flex items-center justify-center rounded-full">
              03
            </span>

            <div className="w-20 h-20 mx-auto bg-purple-100 flex items-center justify-center rounded-full mb-6 text-3xl">
              <img src={RocketImage} alt="" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Start Creating
            </h3>

            <p className="text-gray-500 text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StepSection;