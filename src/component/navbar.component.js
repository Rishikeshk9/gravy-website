/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png"; 
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'About', href: 'about', current: true },
  { name: 'Menu', href: '#', current: false },
  { name: 'Reservation', href: 'reservation', current: false },
  { name: 'Events & Promotions', href: 'events', current: false },
  { name: 'Gallery', href: 'gallery', current: false },

  { name: 'Careers', href: 'careers', current: false },
  { name: 'Contact', href: 'contact', current: false }, 

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="fixed w-full top-0 shadow-lg  z-50 " >
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 bg-gravy py-3  ">
            <div className="relative flex items-center justify-between h-16  ">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  text-white hover:text-gravy_accent hover:bg-gray-700   ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex  pl-5 bg-gravy ">
                <div className="flex-shrink-0 flex items-center">
                <a href="/"><img
                    className="block lg:hidden h-14  pt-1 w-auto"
                    src={logo}
                    alt="Workflow"
                  /></a>
                  <a href="/"> <img
                    className="hidden lg:block h-14  w-auto"
                    src={logo}
                    alt="Workflow"
                  /></a>
                </div>
                <div className="hidden sm:block sm:ml-6 bg-gravy ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-gravy_accent' : 'text-white hover:bg-gray-700 hover:text-gravy_accent',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <Transition
                    as={Fragment}
                    enter="transition ease-in-out duration-800"
                    enterFrom="transform opacity-0   translate-x-full"
                    enterTo="transform opacity-100   translate-x-0"
                    leave="transition ease-in-out duration-800"
                    leaveFrom="transform opacity-100  translate-x-full"
                    leaveTo="transform opacity-0 translate-x-0"
                  >
          <Disclosure.Panel className="sm:hidden bg-black bg-opacity-90 border-l border-opacity-50  border-white  pt-5 min-h-screen w-2/3   float-right absolute right-0">
            <div className="px-2 pt-2 pb-3 space-y-1 object-right   ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-gravy_accent border-black' : 'text-white hover:bg-gray-700 hover:text-gravy_accent',
                    'block mx-4 py-2   text-base font-medium border-t border-opacity-20  border-white'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </Transition>
        </>
      )}
    </Disclosure>
  )
}
