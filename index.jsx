import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const SignIn = () => (
  <div id="signIn">
    <p>sign in</p>
    <input type="email" placeholder="enter email" />
    <input type="password" placeholder="password" />
    <input type="submit" />
  </div>
);

const SignUp = () => (
  <div id="signUp">
    <p>sign up</p>
    <input type="email" placeholder="enter email" />
    <input type="password" placeholder="password" />
    <input type="submit" />
  </div>
);

const SignUpButton = ({ onClick }) => (
  <div className="boxButton">
    <p>hello there...</p>
    <input type="button" value="signup" onClick={onClick} />
  </div>
);
const SignInButton = ({ onClick }) => (
  <div className="boxButton">
    <p>welcome back!</p>
    <input type="button" value="signin" onClick={onClick} />
  </div>
);
const Page = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <>
          <SignIn />
          <SignUpButton onClick={() => setIsSignIn(false)} />
        </>
      ) : (
        <>
          <SignInButton onClick={() => setIsSignIn(true)} />
          <SignUp />
        </>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
