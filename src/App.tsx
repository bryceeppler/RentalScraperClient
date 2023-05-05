import "./App.css";
import Layout from "./components/layout";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
// https://images.craigslist.org/00g0g_kTyiJ2k1hiQ_09G06s_600x450.jpg
const dummyCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.craigslist.org/00g0g_kTyiJ2k1hiQ_09G06s_600x450.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.craigslist.org/00g0g_kTyiJ2k1hiQ_09G06s_600x450.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.craigslist.org/00g0g_kTyiJ2k1hiQ_09G06s_600x450.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.craigslist.org/00g0g_kTyiJ2k1hiQ_09G06s_600x450.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn-xs btn">
          1
        </a>
        <a href="#item2" className="btn-xs btn">
          2
        </a>
        <a href="#item3" className="btn-xs btn">
          3
        </a>
        <a href="#item4" className="btn-xs btn">
          4
        </a>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          Newly renovated, 1 bedroom condo with den
        </h2>
        <ul>
          <li>1 bedroom</li>
          <li>1 bathroom</li>
          <li>1 den</li>
          <li>1 parking spot</li>
        </ul>
        <p className="card-text">
          <span className="font-bold text-green-500">$</span>
          <span className="font-bold text-green-500">1,800</span>
          <span className="text-gray-500">/month</span>
        </p>

        <div className="card-actions justify-end">
          <button className="btn-primary btn-sm btn">View</button>
        </div>
      </div>
    </div>
  );
};
type Listing = {
  title: string;
  price: number;
  description: string;
  images: string[];
  link: string;
  location: string;
  posted_at: string;
};

const ListingCard = ({ listing }: { listing: Listing }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageChange = (index: number) => {
    setSelectedImage(index);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="carousel w-full">
        <img
          src={listing.images[selectedImage]}
          className="h-48 w-full rounded-t-lg object-cover"
        />
      </div>
      <div className="flex w-full flex-wrap justify-center gap-2 py-2">
        {listing.images.map((_, index) => (
          <button
            className={`btn-xs btn ${
              selectedImage === index ? "btn-primary" : ""
            }`}
            onClick={() => handleImageChange(index)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title font-bold">{listing.title}</h2>
        <ul className="text-sm">
          <li className="text-secondary">
            {dayjs(listing.posted_at).fromNow()}
          </li>
          <li className="truncate text-ellipsis ">{listing.location}</li>
        </ul>
        <div className="flex flex-grow" />

        <div
          className="card-text textarea-bordered textarea h-40 overflow-auto text-ellipsis whitespace-pre-wrap text-xs "
          dangerouslySetInnerHTML={{ __html: listing.description }}
        />
        <div className="p-0.5" />

        <div className="card-actions justify-between">
          <p>
            {" "}
            <span className="font-bold text-accent">$</span>
            <span className="font-bold text-accent">{listing.price}</span>
            <span className="text-gray-500">/month</span>
          </p>
          <button
            className="btn-primary btn-sm btn"
            onClick={() => {
              window.open(listing.link, "_blank");
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { data, isLoading } = useQuery<Listing[]>({
    //    ^? const data: number | undefined
    queryKey: ["rentalListings"],
    queryFn: () =>
      fetch("http://localhost:8000/fetch", {
        method: "POST",
        // body: {
        //   "minPrice":1000,
        //   "maxPrice":4000,
        //   "postedAfter":""
        // }
        body: JSON.stringify({
          minPrice: 1000,
          maxPrice: 4000,
          postedAfter: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <Layout>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 p-2 md:grid-cols-1 lg:grid-cols-2">
        {isLoading && <div className="animate-bounce">Loading...</div>}
        {data &&
          data.map((listing: Listing) => <ListingCard listing={listing} />)}
      </div>
    </Layout>
  );
}

export default App;
