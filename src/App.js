import "./App.css";
import Countrycard from "./Countrycard";
import { useEffect, useState } from "react";

function App() {
  const [flags, setFlags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getCountries = async () => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all"
      );
      console.log("API request made");
      const data = await res.json();
      // console.log(data)
      setFlags(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const filteredFlags = flags.filter((flag) =>
    flag.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <div
          style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* {" "} */}
        <input
          className="search"
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
        />
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {filteredFlags.map((flag, idx) => (
          <Countrycard key={idx} image={flag.flags.png} name={flag.name.common} />
        ))}
      </div>
    </div>
  );
}

export default App;
