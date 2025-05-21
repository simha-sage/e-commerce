import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import UserAuthToggle from "./components/userAuthToggle";
import SellerAuthToggle from "./components/sellerAuthToggle";

const Header = ({ onClick, label }) => {
  return (
    <div id="header">
      <input type="button" value={label} onClick={onClick} />
    </div>
  );
};
const Page = () => {
  const [isSeller, setIsSeller] = useState(false);
  return (
    <div>
      {isSeller ? (
        <>
          <Header
            onClick={() => setIsSeller(false)}
            label="Login as customer"
          />
          <SellerAuthToggle />
        </>
      ) : (
        <>
          <Header onClick={() => setIsSeller(true)} label="Become a seller" />
          <UserAuthToggle />
        </>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
