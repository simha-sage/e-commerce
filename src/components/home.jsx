const Notice = () => {
  return (
    <div className="notice">
      <h3>OUR APP IS UNDER CONSTRUTION</h3>
    </div>
  );
};
const Navigation = ({ openLogin }) => {
  return (
    <div className="navigation">
      <div className="navigation-left">
        <h4>Logo</h4>
        <h4>Sprit</h4>
        <h4>Wine</h4>
        <h4>Beer</h4>
        <h4>Food</h4>
        <h4>More</h4>
      </div>
      <div className="navigation-right">
        <input type="text" placeholder="Search" />
        <button onClick={openLogin}>SignIn</button>
        <h4>Cart</h4>
      </div>
    </div>
  );
};
const Banners = () => {
  return <div className="banners"></div>;
};
const Cards = () => {
  return (
    <div className="card">
      <div className="image"></div>
    </div>
  );
};

const Main = () => {
  return (
    <div className="cards">
      {Array.from({ length: 24 }).map((_, i) => (
        <Cards key={i} />
      ))}
    </div>
  );
};
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>Food & Bar</h2>
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
