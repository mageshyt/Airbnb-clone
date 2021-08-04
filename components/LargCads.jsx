import Image from "next/image";
function LargeCads({ img, title, description, buttonText }) {
  return (
    <section className=" relative py-16 cursor-pointer">
      {/* image */}
      <div className="image relative h-96 min-w-[300px]  ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      {/* title */}
      <div
        className="absolute top-32 left-32
  "
      >
        <h3 className="text-4xl mb-3  w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 p-3 rounded-2xl mt-4 cursor-pointer">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCads;
