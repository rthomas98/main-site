"use client";

import React from "react";
import {
  CheckBadgeIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Proven Expertise",
    description:
      "Decades of experience in delivering high-quality, innovative digital solutions across various industries.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Client-Centric Approach",
    description:
      "Dedicated to understanding and meeting your needs, ensuring personalized and effective solutions.",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Cutting-Edge Technology",
    description:
      "Continuously evolving with the latest technologies to provide advanced, future-proof solutions.",
    icon: RocketLaunchIcon,
  },
];

function HomeWhyUs() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-em-pink">
                Your Choice for Digital Excellence
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Empuls3: Unmatched Expertise and Innovation
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Empuls3 stands out with its unique blend of creativity,
                technology, and client-focused solutions, driving digital
                success.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-em-yellow"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="./images/Group_black_Adult_Hipsters.png"
            alt="Group black Adult Hipsters"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeWhyUs;
