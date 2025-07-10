import { Link } from "react-router-dom";
import Data from "../../server/data.json";
const Notice = () => {
  return (
    <div className="bg-amber-100 text-center">
      <h3>OUR APP IS UNDER CONSTRUTION</h3>
    </div>
  );
};
const Navigation = ({ openLogin }) => {
  return (
    <div className="flex bg-[#8196a4] h-7">
      <div className="flex justify-around w-6/12">
        <h4>Logo</h4>
        <h4>Sprit</h4>
        <h4>Wine</h4>
        <h4>Beer</h4>
        <h4>Food</h4>
        <h4>More</h4>
      </div>
      <div className="flex justify-around">
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <button onClick={openLogin}>SignIn</button>
        </div>
        <div>
          <h4>Cart</h4>
        </div>

        <div>
          <Link to="/about">
            <h4>about</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
const Banners = () => {
  return <div className="bg-blue-200 h-30"></div>;
};
const Cards = ({ item }) => {
  const img_url = item.info.cloudinaryImageId;
  return (
    <div className="bg-[#d9e8f2] hover:bg-[#acc6da] transition-colors duration-200 h-[300px] w-[200px] m-4 rounded-xl">
      <div className="h-[120px] w-[180px] m-2.5 rounded-xl">
        <img
          className="h-full w-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${img_url}`}
        />
        <h1 className="font-bold">{item.info.name}</h1>
        <h1>{item.info.costForTwo}</h1>
        <h1>{item.info.locality}</h1>
        <h1>{item.info.areaName}</h1>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (item, i) => (
          <Cards key={i} item={item} />
        )
      )}
    </div>
  );
};
const Footer = () => {
  return (
    <div className="flex bg-amber-50 justify-around">
      <div className="footer-section">
        <h2 className="">Food & Bar</h2>
        <p>Delicious food & premium drinks served fresh.</p>
      </div>
      <div className="footer-section">
        <h2>Contact</h2>
        <p>+91 418529635</p>
        <p>contact@foodnbar.com</p>
      </div>
      <div className="footer-section">
        <h2>Visit Us</h2>
        <p>Beach Pakkana,K.P.Palem Beach</p>
        <p>Open: 12 PM – 11 PM</p>
      </div>
    </div>
  );
};

const Home = ({ openLogin }) => {
  return (
    <>
      <Notice />
      <Navigation openLogin={openLogin} />
      <Banners />
      <Main />
      <Footer />
    </>
  );
};
export default Home;
