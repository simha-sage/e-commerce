import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAuthToggle from "./components/userAuthToggle";
import SellerAuthToggle from "./components/sellerAuthToggle";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

const SwapButton = ({ onClick, label }) => {
  return (
    <div id="header">
      <input type="button" value={label} onClick={onClick} />
    </div>
  );
};
const Login_toggle = ({ onLogin }) => {
  const [isSeller, setIsSeller] = useState(false);
  return (
    <div>
      {isSeller ? (
        <>
          <SwapButton
            onClick={() => setIsSeller(false)}
            label="Login as customer"
          />
          <SellerAuthToggle />
        </>
      ) : (
        <>
          <SwapButton
            onClick={() => setIsSeller(true)}
            label="Become a seller"
          />
          <UserAuthToggle onLogin={onLogin} />
        </>
      )}
    </div>
  );
};
const Page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const openLogin = () => {
    setIsLogin(false);
  };
  return (
    <>
      {isLogin ? (
        <>
          <Home openLogin={openLogin} />
        </>
      ) : (
        <Login_toggle
          onLogin={() => {
            setIsLogin(true);
          }}
        />
      )}
    </>
  );
};
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
