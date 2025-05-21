import React, { useState } from "react";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    const response = await fetch("http://localhost:5000/userSignIn", {
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
    <form
      id="signIn"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn();
      }}
    >
      <p>User Login Form</p>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        required
        minLength="6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async (e) => {
    const response = await fetch("http://localhost:5000/userSignUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.message);

    setEmail("");
    setPassword("");
    window.alert(data.message);
  };
  return (
    <form
      id="signUp"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp();
      }}
    >
      <p>User Registeration Form</p>
      <input
        type="email"
        placeholder="enter email"
        value={email}
        required
        maxLength={30}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        required
        minLength={6}
        maxLength={30}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

const SignUpButton = ({ onClick }) => (
  <div className="boxButton">
    <p>New here..Create an account?</p>
    <input type="button" value="Register" onClick={onClick} />
  </div>
);
const SignInButton = ({ onClick }) => (
  <div className="boxButton">
    <p>Welcome back!</p>
    <input type="button" value="Login" onClick={onClick} />
  </div>
);
const UserAuthToggle = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <>
      <div id="login_toggle">
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
      </div>
    </>
  );
};
export default UserAuthToggle;
