import React from "react";
function Coin({ image, name, symbol, price, volume, priceChange, marketcap }) {
  console.log("run...");
  return (
    <div className="flex justify-center">
      <div className="flex flex-row h-[80px] w-[900px]  divide-y divide-slate-200 ">
        <div className="flex items-center min-w-[300px] pr-[20px]">
          <img
            src={image}
            alt="crypto"
            className="h-[30px] w-[30px] mr-[24px]"
          />
          <h1 className="text-[16px] w-[150px]">{name}</h1>
          <p className="uppercase">{symbol}</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="w-[110px]">${price}</p>
          <p className="155px">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="text-red-500 w-[100px] text-center">
              {priceChange.toFixed(2)}
            </p>
          ) : (
            <p className="text-green-500 w-[100px] text-center">
              {priceChange.toFixed(2)}
            </p>
          )}
          <p className="w-[230px]">Mkt Cap:${marketcap.toLocaleString()};</p>
        </div>
      </div>
    </div>
  );
}
export default Coin;
