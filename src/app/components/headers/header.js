"use client";

import { Fragment, useState, React } from "react";
import Image from "next/image";

import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  DocumentChartBarIcon,
  CodeBracketIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  BugAntIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const company = [
  { name: "About Us", href: "/company/about-us" },
  { name: "Why Us", href: "/company/why-us" },
  { name: "Approach", href: "/company/approach" },
  { name: "Partnership", href: "/company/partnership" },
];

const services = [
  {
    name: "IT Consulting",
    description:
      "Expert guidance to navigate and optimize your IT strategy and infrastructure.",
    href: "/services/it-consulting",
    icon: UserGroupIcon,
  },
  {
    name: "Software engineering",
    description:
      "Advanced engineering solutions to build robust and scalable software systems.",
    href: "/services/software-engineering",
    icon: CodeBracketIcon,
  },
  {
    name: "Application services",
    description:
      "Comprehensive services to develop, manage, and modernize applications.",
    href: "/services/application-services",
    icon: CommandLineIcon,
  },
  {
    name: "Managed IT services",
    description:
      "Reliable IT management and support for seamless business operations.",
    href: "/services/managed-it-services",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Quality Assurance & Testing",
    description:
      "Integrating development and operations for faster, more efficient workflows.",
    href: "/services/quality-assurance-and-testing",
    icon: BugAntIcon,
  },
  {
    name: "Maintenance & Support",
    description:
      "Dedicated support and maintenance for ongoing operational efficiency.",
    href: "/services/maintenance-and-support",
    icon: ChartBarSquareIcon,
  },
];
const callsToAction = [
  {
    name: "Have More Questions?",
    href: "/frequently-asked-questions",
    icon: QuestionMarkCircleIcon,
  },
  {
    name: "Ready To Get Started",
    href: "/contact",
    icon: PhoneIcon,
  },
];

const solutions = [
  {
    name: "Software Development & Design",
    description:
      "Crafting bespoke software and designs for modern business needs.",
    href: "solutions/software-development-and-design",
    icon: ChartPieIcon,
  },
  {
    name: "Custom Software Development",
    description:
      "Tailored software solutions to perfectly fit your unique business goals",
    href: "/solutions/custom-software-development",
    icon: SquaresPlusIcon,
  },
  {
    name: "Front-End Development",
    description:
      "Creating visually stunning and user-friendly front-end interfaces.",
    href: "/solutions/front-end-development",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Back-End Development",
    description:
      "Robust back-end systems for powerful and efficient application performance.",
    href: "/solutions/back-end-development",
    icon: ArrowPathIcon,
  },
  {
    name: "Full-Stack Development",
    description:
      "Comprehensive development solutions, covering both front and back-end needs.",
    href: "/solutions/full-stack-development",
    icon: FingerPrintIcon,
  },
  {
    name: "Web Application Development",
    description:
      "Building dynamic web applications for enhanced online user experiences",
    href: "/solutions/web-application-development",
    icon: DocumentChartBarIcon,
  },
  {
    name: "React Native Development",
    description:
      "Developing cross-platform mobile apps with seamless, native-like functionality.",
    href: "/solutions/react-native-development",
    icon: DocumentChartBarIcon,
  },
  {
    name: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces for digital platforms.",
    href: "/solutions/ui-ux-design",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Progressive Web Applications (PWAs)",
    description:
      "Creating fast, engaging PWAs for a superior offline and online experience.",
    href: "/solutions/progressive-web-applications",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Ecommerce Development",
    description:
      "Developing comprehensive eCommerce platforms for online retail success.",
    href: "/solutions/ecommerce-development",
    icon: DocumentChartBarIcon,
  },
  {
    name: "HubSpot Development",
    description:
      "Integrating and customizing HubSpot for optimized marketing and sales.",
    href: "/solutions/hubspot-development",
    icon: DocumentChartBarIcon,
  },
  {
    name: "Custom WordPress Development",
    description:
      "Tailoring WordPress sites for unique, functional, and aesthetic needs.",
    href: "/solutions/custom-wordpress-development",
    icon: DocumentChartBarIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              src="./images/emp-logo.svg"
              alt="Empuls3 Logo"
              width={40}
              height={40}
              className="h-10 w-auto sm:h-10"
            />
            <span className="sr-only">Empuls3</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>

          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Company</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block p-2 hover:text-em-purple"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Solutions</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-emp-pink"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-em-pink"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/our-work"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Our Work
          </a>

          <a
            href="/case-studies"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Case Studies
          </a>
          <a
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Us
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="rounded-md bg-em-pink px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-em-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get A Quote
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="./images/emp-logo.svg"
                alt="Empuls3 Logo"
                width={40}
                height={40}
                className="h-10 w-auto sm:h-10"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...company, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Solutions
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...solutions, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...services, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/our-work"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Our Work
                </a>
                <a
                  href="/case-studies"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Case Studies
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="rounded-md bg-em-pink px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emp-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emp-pink"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
