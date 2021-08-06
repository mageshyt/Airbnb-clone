import Image from "next/image";
// search icon

import { useState, useEffect } from "react";
//! icons
import {
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/solid";
// ! Date picker
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  //!search input
  const [searchInput, setSearchInput] = useState("");
  //* set date on selection
  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());
  //* get no of guests
  const [noOfGuests, setNoOfGuests] = useState(1);
  // *change background color: ;
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  if (typeof window === "undefined") {
    global.window = {};
  } else {
    global.window.addEventListener("scroll", changeNavbarColor);
  }

  // this.addEventListener("scroll", changeBackgroundOnScroll);
  //!router
  const router = useRouter();

  //! selectionRange

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  //! handleSelect for update the date when we click
  const handleSelect = (ranges) => {
    // console.log({ ranges });
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  //! Reset input
  const resetInput = () => {
    setSearchInput("");
  };
  // !search
  const search_url = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };
  return (
    <header
      className={
        colorChange
          ? "navbar transform transition duration-600 ease-in bg-[#121212]  "
          : "navbar bg-transparent"
      }
    >
      {/* Left  for logo*/}
      <div
        onClick={() => router.push("/")}
        className="left relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/*  middle for search  */}
      <div className=" flex  item-center md:border-2  rounded-full p-2  py-2">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-grow pl-5 outline-none bg-transparent "
        />
        {/* <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full  text-white p-2 cursor-pointer md:gap-x-28" /> */}
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#8502ff] rounded-full  text-white p-2 cursor-pointer md:gap-x-28" />
      </div>
      {/* Right */}
      <div className="flex items-center text-gray-200 justify-end  space-x-4">
        <p className="hidden md:inline font-medium  cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="hidden h-6 text-gray-300   md:inline" />
        <div className="flex items-center  space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6 text-gray-300 " />
          <UserCircleIcon className="h-6 text-gray-300" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto  mt-2  ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex item-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Gusts
            </h2>
            <UsersIcon className="h-6" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-3 text-lg mb-1 text-red-400 font-bold outline-none"
            />
          </div>
          {/* for button */}
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-600">
              Cancel
            </button>
            <button onClick={search_url} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
