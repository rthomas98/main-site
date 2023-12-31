"use client";

import React from "react";

const people = [
  {
    name: "Rob Thomas",
    role: "Founder and CEO / Developer",
    imageUrl: "../images/rob-thomas.png",
  },
  {
    name: "Cole Bush",
    role: "CTO / Developer",
    imageUrl: "../images/cole-bush.png",
  },
  {
    name: "Adrian Hebert-Thomas Esq.",
    role: "Legal / Project Manager",
    imageUrl: "../images/adrian-thomas.png",
  },
  {
    name: "Denise Gray",
    role: "Sales and Marketing Manager",
    imageUrl: "../images/denise-gray.png",
  },
];

function OurTeam() {
  return (
    <div className="bg-em-purple py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet the Minds Behind Empuls3
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our team is a blend of creative thinkers, tech experts, and
            visionary strategists, dedicated to delivering digital excellence.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OurTeam;
