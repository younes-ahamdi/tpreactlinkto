import React, { useEffect, useState } from "react";

function CountrySlider() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleReloadFlags = () => {
    // Reload a random subset of countries
    const shuffled = [...countries].sort(() => Math.random() - 0.5);
    setCountries(shuffled.slice(0, 15)); // Display a subset of 15 countries
  };

  if (loading) {
    return <p>Loading flags...</p>;
  }

  return (
    <div>
      <button
        onClick={handleReloadFlags}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          cursor: "pointer",
          backgroundColor: "#e67e22", /* Updated color */
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Reload Flags
      </button>
      <div className="flag-slider">
        {countries.map((country) => (
          <div key={country.cca3} className="flag-container">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              style={{ width: "100%", borderRadius: "5px" }}
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountrySlider;
