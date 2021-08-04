import Image from "next/image";
// search icon
// import {searchI}

import { MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 p-5  z-50 grid  grid-cols-3 bg-white shadow-md md:px-10 md:shadow-sm">
      {/* Left  for logo*/}
      <div className="left relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/*  middle for search  */}
      <div className=" flex item-center md:border-2 rounded-full p-2  py-2">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 outline-none bg-transparent "
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full  text-white p-2 cursor-pointer md:gap-x-28" />
      </div>
      {/* Right */}
      <div className="flex items-center text-gray-500 justify-end  space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center  space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
