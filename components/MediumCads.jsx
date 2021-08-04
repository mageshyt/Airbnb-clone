import Image from "next/image";
function MediumCads({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-150 ease-out">
      <div className="  relative image-container h-80 w-80">
        <Image src={img} layout="fill" className="rounded-xl" />
        {/* Title */}
      </div>
      <h3 className=" text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCads;
