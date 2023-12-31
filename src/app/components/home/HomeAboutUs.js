"use client";

import React from "react";
import {
  HandThumbUpIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Expert Team",
    description:
      "Our team comprises industry experts dedicated to delivering excellence and innovation in every project.",
    icon: UserGroupIcon,
  },
  {
    name: "Client-Centric Approach",
    description:
      "We prioritize understanding and meeting our clients' unique needs, ensuring tailored solutions for every challenge.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Proven Track Record",
    description:
      "With a history of successful projects, we've established a reputation for transforming ideas into impactful realities.",
    icon: ShieldCheckIcon,
  },
];

function HomeAboutUs() {
  return (
    <div className="overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-em-pink">
                Empowering Digital Transformations
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                About Empuls3: Pioneers in Tech Innovation
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Empuls3, we blend cutting-edge technology with creative
                solutions to redefine the digital landscape and drive business
                growth.
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
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="./images/web-dev-team.png"
              alt="Empuls3's Web Development Team"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
