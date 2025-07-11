import { useState } from "react";
const Cards = ({ item, setCount, count }) => {
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
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="bg-red-200 rounded-lg p-1.5 font-mono"
        >
          ADD
        </button>
      </div>
    </div>
  );
};
export default Cards;
