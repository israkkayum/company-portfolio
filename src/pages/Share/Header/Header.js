import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

// icon from heroicon
import {
  Bars3Icon,
  CircleStackIcon,
  CodeBracketIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  WindowIcon,
  CursorArrowRaysIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

// Create a text-based logo since we're changing the company name
const TextLogo = () => (
  <div className="text-2xl font-bold text-blue-600">
    Fatiksolution
  </div>
);

// service list
const services = [
  {
    name: "Mobile App",
    description: "Crafting Apps for Tomorrow.",
    href: "/services/service-one",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Backend Development",
    description: "Empowering Your App's Core.",
    href: "/services/service-one",
    icon: CircleStackIcon,
  },
  {
    name: "Frontend Development",
    description: "Elevating User Experiences.",
    href: "/services/service-one",
    icon: CodeBracketIcon,
  },
  {
    name: "UI/UX Design",
    description: "Designing Experiences, Crafting Delight.",
    href: "/services/service-one",
    icon: WindowIcon,
  },
  {
    name: "Websites (end-to-end)",
    description: "From Concept to Clicks.",
    href: "/services/service-one",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Corporate Identity",
    description: "Forging Memorable Brands.",
    href: "/services/service-one",
    icon: SparklesIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "/", icon: PlayCircleIcon },
  { name: "Contact sales", href: "contact", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white fixed top-0 left-0 right-0 z-40">
        {/* ----- desktop menu -------- */}

        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" reloadDocument className="-m-1.5 p-1.5">
              <span className="sr-only">Fatiksolution</span>
              <TextLogo />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-600 font-bold"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* menu list  */}
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              reloadDocument
              to="/home"
              className="font-semibold text-base leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 font-semibold text-base leading-6 text-gray-900">
                Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-blue-600 font-semibold"
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
                            className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            reloadDocument
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        reloadDocument
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Link
              to="/career"
              reloadDocument
              className="font-semibold text-base leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Career
            </Link>
            <Link
              to="/about"
              reloadDocument
              className="font-semibold text-base leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/blog"
              reloadDocument
              className="font-semibold text-base leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Blog
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact"
              reloadDocument
              className="font-semibold text-base leading-6 text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Contact Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* mobile menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" reloadDocument className="-m-1.5 p-1.5 ">
                <span className="sr-only">Fatiksolution</span>
                <TextLogo />
              </Link>

              {/* --- close menu ---- */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-7 w-7 text-blue-600 font-bold"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    reloadDocument
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Services
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180 text-blue-600" : "",
                              "h-5 w-5 flex-none text-blue-600"
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
                  <Link
                    to="/career"
                    reloadDocument
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Career
                  </Link>
                  <Link
                    to="/about"
                    reloadDocument
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/blog"
                    reloadDocument
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="contact"
                    reloadDocument
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <hr class="my-1 h-0.5 border-t-10 bg-neutral-100 opacity-100 dark:opacity-100" />
      </header>
    </div>
  );
};

export default Header;
