"use client";

import React, { Component } from "react";

export class LogoCloud extends Component {
  render() {
    return (
      <div className="bg-em-purple py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Partnering with Industry Leaders: A Showcase of Our Esteemed Clients
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="./images/warner-bros-logo.svg"
              alt="Warner Bros Discovery"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="./images/samsung-logo.svg"
              alt="Samsung"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="./images/shell-logo.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="./images/washmetrix-logo.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LogoCloud;
