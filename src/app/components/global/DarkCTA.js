"use client";

import React from "react";

function DarkCTA() {
  return (
    <div className="relative isolate overflow-hidden bg-em-dark-purple">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-em-pink sm:text-4xl">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join the ranks of our satisfied clients and embark on a journey to
            digital excellence with Empuls3. Whether you're looking to start a
            new project or explore our innovative solutions, we're here to guide
            you every step of the way.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-em-yellow px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-em-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Your Project
            </a>
            <a
              href="/solutions/solutions-overview"
              className="text-sm font-semibold leading-6 text-white"
            >
              Explore Our Solutions <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default DarkCTA;
