"use client";

import React from "react";
import {
  EyeDropperIcon,
  HandThumbUpIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/20/solid";

function OurStory() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-em-pink">
                Crafting a Legacy in Digital Innovation
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Journey of Empuls3
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Discover the story behind Empuls3, where every milestone
                reflects our passion for technology and commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="../images/Startup_Meeting_Room_Team_of_African_American.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Empuls3 began as a vision to transform the digital landscape.
                Our journey, fueled by a passion for innovation and a dedication
                to client success, has seen us evolve from a small startup to a
                leader in digital solutions. We pride ourselves on not just
                keeping up with technological advancements but being at the
                forefront of them. Each step in our journey has been marked by a
                commitment to excellence, a drive to innovate, and a focus on
                delivering tangible results for our clients.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <EyeDropperIcon
                    className="mt-1 h-5 w-5 flex-none text-em-yellow"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Founding Vision
                    </strong>{" "}
                    Empuls3 was born from a desire to blend creative design with
                    cutting-edge technology, setting new standards in digital
                    solutions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <PresentationChartLineIcon
                    className="mt-1 h-5 w-5 flex-none text-em-yellow"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Growth and Expansion
                    </strong>{" "}
                    Our journey has been marked by continuous growth, expanding
                    our services, team, and global footprint.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <HandThumbUpIcon
                    className="mt-1 h-5 w-5 flex-none text-em-yellow"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Innovation and Recognition
                    </strong>{" "}
                    Consistently recognized for our innovative solutions, we
                    continue to push boundaries in the digital world.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                As we look to the future, Empuls3 remains committed to driving
                digital innovation and empowering businesses worldwide. Our
                story is not just about what we have achieved, but about the
                partnerships we've built, the challenges we've overcome, and the
                impact we've made. Join us as we continue to write our story,
                one success at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
