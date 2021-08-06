import Header from "../components/Header";

import { useRouter } from "next/dist/client/router";

import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { format } from "date-fns";
import Scroll from "../components/Scroll";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(router.query);

  const formattedStartDate = format(new Date(), "dd MMM yy");
  const formattedEndDate = format(new Date(), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    //   style={{ background: "url(/home-page.jpg)" }}style={{ background: "url(/home-page.jpg)" }}

    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for - {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 text-gray-500 whitespace-nowrap">
            Stays in {location}
          </h1>

          <div className="hidden  lg:inline-flex mb-5 space-x-5">
            <button className="button">Cancellation Flexibility</button>
            <button className="button">Type of place</button>
            <button className="button">price</button>
            <button className="button">Rooms and Beds</button>
            <button className="button">More filters</button>
          </div>

          {/* Display Result */}
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  location={location}
                  img={img}
                  title={title}
                  description={description}
                  price={price}
                  star={star}
                  total={total}
                />
              )
            )}
            {/* {console.log("-->", searchResults)} */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// !server side render

export async function getStaticProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    //! get response from it and shore in json
    (response) => response.json()
  );

  return {
    // pass the data to the React
    props: {
      searchResults,
    },
  };
}
