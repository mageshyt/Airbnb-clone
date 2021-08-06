import Image from "next/image";
import Header from "./Header";
const Banner = () => {
  return (
    <div className="flex flex-col">
      <div className="relative   h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]  ">
        <Image
          src="https://links.papareact.com/0fm"
          // src="/home-page.jpg"
          layout="fill"
          objectFit="cover"
        />
        <div className=" absolute top-1/2   w-full text-center">
          <p className="text-xl font-bold text-gray-900 sm:text-2xl">
            Not sure where to go ? Perfect.
          </p>
          {/* button i am flexible */}
          <button className=" text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-2  hover:shadow-xl active:scale-90 transition duration-150">
            I'm flexible
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
