import React, { useState } from "react";

import "./App.css";
import { fetchCapital } from "./api/fetchCapital";

const App = () => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [flag, setFlag] = useState("");

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchCapital(query);

      console.log(data[0]);

      setCountry(data[0].name);
      setCapital(data[0].capital);
      setFlag(data[0].flag);
      setQuery("");
    }
  };

  return (
    <div className="main-container">
      <input
        className="search"
        type="text"
        placeholder="Enter country name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {capital && (
        <div className="capital">
          <div className="country-name">{country}</div>
          <img className="flag-img" src={flag} alt="Flag" />
          <div className="capital-name">{capital}</div>
        </div>
      )}
    </div>
  );
};

export default App;
