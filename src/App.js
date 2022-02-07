import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const fillterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(fillterCoin);
  return (
    <div className="mt-[64px]">
      <div className="flex flex-col justify-center items-center mb-[64px] ">
        <h1 className="text-4xl text-black mb-10">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            className="pl-[16px] w-[300px] h-[50px] rounded-[4px] text-[#e2e2e2] border-none outline-0  bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white placeholder:text-[#e2e2e2]"
          />
        </form>
      </div>
      {fillterCoin.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
