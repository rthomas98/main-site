'use client'

import React, { useState } from 'react';

function Sample() {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
      setOpenSection(openSection === section ? null : section);
    };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            Learn More About Us
          </h2>
        </div>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {/* Accordion items */}
          <div className={`${openSection === 1 ? 'mb-6' : ''}`}>
            <dt className="text-lg">
              <button onClick={() => toggleSection(1)} className="text-left w-full flex justify-between items-start text-gray-400">
                <span className="font-medium text-gray-900">
                  Section Title 1
                </span>
                {/* Icon */}
              </button>
            </dt>
            <dd className={`${openSection === 1 ? 'mt-2' : 'hidden'}`}>
              <p className="text-base text-gray-500">
                Detailed information about the section. Could be about company values, mission, culture, etc.
              </p>
            </dd>
          </div>
          {/* Repeat for other sections */}
        </dl>
      </div>
    </div>
  )
}

export default Sample