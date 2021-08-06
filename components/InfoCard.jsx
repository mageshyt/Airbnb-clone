// !icon
import { StarIcon } from "@heroicons/react/solid";

import { HeartIcon } from "@heroicons/react/outline";

import Image from "next/image";

import { useState } from "react";
// !animation
import Bounce from "react-reveal/Bounce";

import styled from "styled-components";

function InfoCard({ img, location, title, description, star, price, total }) {
  const [color, setColor] = useState(false);
  // !heart color change
  const changeColor = () => {
    setColor(!color);
  };

  return (
    <div>
      <Bounce right cascade>
        <Container className="grid grid-row-2 lg:flex xl:flex  md:flex  py-7 px-2 cursor-pointer hover:opacity-80 pr-4 mb-4 transition duration-200 ease-out border-b first:border-t  hover:shadow-lg rounded-2xl">
          {/* Image */}
          <div className="relative  h-[200px] w-50  md:h-52 md:w-80 flex-shrink-0">
            <Image
              src={img}
              className="rounded-2xl"
              objectFit="cover"
              layout="fill"
            />
          </div>
          {/* Info */}

          <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
              <p>{location}</p>

              <HeartIcon
                onClick={changeColor}
                className={
                  color
                    ? "text-red-400  h-7 cursor-pointer"
                    : " h-7 cursor-pointer"
                }
              />
            </div>
            {/* Title */}

            <h4 className="text-xl">{title}</h4>

            <div className="border-b w-10 pt-2 "></div>

            {/* Description */}
            <p className=" pt-2 text-sm text-gray-600 flex-grow">
              {description}
            </p>

            {/* ration */}
            <div className="flex justify-between items-end pt-5">
              <p className="flex items-center  space-x-4">
                <StarIcon className="h-5 text-red-400" />
                {star}
              </p>
              {/* Price */}
              <div className="mr-3">
                <p className="text-xl lg:text-2xl font-semibold pb-2">
                  {price}
                </p>
                <p className="text-right font-extralight">{total}</p>
              </div>
            </div>
          </div>
        </Container>
      </Bounce>
    </div>
  );
}

export default InfoCard;

const Container = styled.div`
  .changeHeart {
    color: red;
  }
`;
