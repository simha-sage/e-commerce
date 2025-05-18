import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.message);
    if (data.message == "Login successful") {
      setEmail("");
      setPassword("");
      window.alert("Login successful");
    } else {
      window.alert("Login Unsucessful");
    }
  };
  return (
    <div id="signIn">
      <p>sign in</p>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" onClick={handleSignIn} />
    </div>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.message);

    setEmail("");
    setPassword("");
    window.alert("User registered sucessfully");
  };
  return (
    <div id="signUp">
      <p>sign up</p>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" onClick={handleSignUp} />
    </div>
  );
};

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
