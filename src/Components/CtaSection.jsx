import React from "react";
const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-800  py-24 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-lg text-purple-100 mb-10">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          
          <button className="px-8 py-3 rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="px-8 py-3 rounded-full border border-white font-semibold hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>

        </div>

        {/* Small Text */}
        <p className="text-purple-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTASection;