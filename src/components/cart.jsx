import { useEffect, useState } from "react";

function Cart() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/usermunna");
      const json = await res.json();
      setData(json);
    })();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
export default Cart;
