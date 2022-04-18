import {
  AcademicCapIcon,
  DesktopComputerIcon,
  LightningBoltIcon,
  TicketIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-fullrounded-3xl fixed top-0 left-0 right-0 z-10 mx-auto border border-gray-400 bg-gray-500 bg-opacity-80 bg-clip-padding py-1 shadow-xl backdrop-blur-xl backdrop-filter firefox:bg-opacity-90">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6  lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex">
            <Link href="/">
              <div className="flex flex-shrink-0 cursor-pointer items-center">
                <img
                  className="block h-10 w-auto"
                  src="images/logo2.svg"
                  alt="Reason logo"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:-my-px md:ml-6 md:flex md:space-x-8">
            <Link href="/#memberships">
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-green-300">
                <TicketIcon className="mr-2 h-5 w-5" /> Memberships
              </a>
            </Link>
            <Link href="/#use-cases">
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-green-300">
                <AcademicCapIcon className="mr-2 h-5 w-5" /> Use cases
              </a>
            </Link>

            <Link href="/#community">
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-green-300">
                <UsersIcon className="mr-2 h-5 w-5" /> Community
              </a>
            </Link>
            <Link href="/#platform">
              <a className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white hover:text-green-300">
                <DesktopComputerIcon className="mr-2 h-5 w-5" /> Platform
              </a>
            </Link>
          </div>

          <div className="flex md:-my-px md:ml-6 md:space-x-8">
            <Link href="https://fanfirst.typeform.com/to/wXGIkF3D">
              <a className="group relative  inline-flex">
                <div className="transitiona-all animate-tilt absolute -inset-px rounded-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-50 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>

                <div className="text-md font-pj relative inline-flex items-center justify-center rounded-full bg-white px-4 py-2 font-bold text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                  <LightningBoltIcon className="mr-1 h-4 w-4" />
                  Early access
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
