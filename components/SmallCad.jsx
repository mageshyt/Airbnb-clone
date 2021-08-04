import Image from "next/image";

const SmallCar = ({ img, location, distance }) => {
  return (
    <div className=" flex items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left part- Image */}
      <div className="image-container relative h-16 w-16 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* left part- Location, distance */}
      <div className="container">
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCar;
