"use client";

import React from "react";

function LightCTA() {
  return (
    <div className="bg-white">
      <div className="px-6 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Transform Your Digital Journey?
            <br />
            Start using our app today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join forces with Empuls3 and unlock the full potential of your
            digital projects. Whether you're seeking innovative solutions or
            wish to start a new venture, our team is here to turn your vision
            into reality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-em-pink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-em-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Our Services
            </a>
            <a
              href="/services/services-overview"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightCTA;
