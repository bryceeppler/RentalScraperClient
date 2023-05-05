import "./App.css";
import Layout from "./components/layout";

const dummyCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://images.craigslist.org/00g0g_kTyiJ2k1hiQ_09G06s_600x450.jpg"
          alt="Shoes"
        />
      </figure>
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
function App() {
  return (
    <Layout>
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid-cols-1">{dummyCard()}</div>
        <div className="grid-cols-1">{dummyCard()}</div>
        <div className="grid-cols-1">{dummyCard()}</div>
        <div className="grid-cols-1">{dummyCard()}</div>
        <div className="grid-cols-1">{dummyCard()}</div>
        <div className="grid-cols-1">{dummyCard()}</div>
      </div>
    </Layout>
  );
}

export default App;
