import React from "react";


const Education = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-black text-white shadow-lg rounded-3xl border border-fuchsia-600">
      <h2 className="text-3xl font-bold text-center text-fuchsia-600 mb-6">
        Educational Qualification
      </h2>
      <div className="border-t-4 border-fuchsia-600 pt-6">
        {/* Degree and Institution Section */}
        <div className="flex items-start space-x-6">
          {/* Left: RUET Logo */}
          <div className="w-16">
            <img src="https://i.ibb.co.com/HV0Hk0j/RUET-logo-svg.png" alt="RUET Logo" className="w-full h-full rounded-full" />
          </div>
          
          {/* Right: Degree and Details */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-semibold text-white">
              BSc in Computer Science and Engineering (CSE)
            </h3>
            <p className="text-base text-gray-300">
              Rajshahi University of Engineering & Technology (RUET), Bangladesh
            </p>
            <p className="text-base text-gray-300">
              <span className="font-medium">Duration:</span> Feb 2019 - Jun 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
