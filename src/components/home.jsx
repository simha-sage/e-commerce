import { Link } from "react-router-dom";
import Data from "../../server/data.json";
import Card from "./card";
import Banners from "./banners";
import { useState } from "react";
import Notice from "./notice";
import Footer from "./footer";

//cart which display add count
const Cart = ({ count }) => {
  console.log(count);
  return <h1>cart{count !== 0 ? `(${count})` : ""}</h1>;
};

const Navigation = ({ openLogin, countForCart }) => {
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
      <div className="flex justify-around w-6/12">
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <button onClick={openLogin}>SignIn</button>
        </div>
        <div>
          <Link to="/cart">
            <Cart count={countForCart} />
          </Link>
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

const Cards = ({ setCountForCart, countForCart }) => {
  return (
    <div className="flex flex-wrap justify-around">
      {Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (item, i) => (
          <Card
            key={i}
            item={item}
            setCount={setCountForCart}
            count={countForCart}
          />
        )
      )}
    </div>
  );
};

const Home = ({ openLogin }) => {
  const [countForCart, setCountForCart] = useState(0);
  return (
    <>
      <Notice />
      <Navigation openLogin={openLogin} countForCart={countForCart} />
      <Banners />
      <Cards countForCart={countForCart} setCountForCart={setCountForCart} />
      <Footer />
    </>
  );
};
export default Home;
