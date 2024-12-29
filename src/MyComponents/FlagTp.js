import React, { useEffect, useState } from "react";
import "./FlagTp.css";

function FlagTp() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        setFilteredCountries(sortedCountries);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleFilter = (letter) => {
    setSelectedLetter(letter);
    if (letter === "ALL") {
      setFilteredCountries(countries);
      setCurrentIndex(0); // Reset to first country
    } else {
      const filtered = countries.filter((country) =>
        country.name.common.startsWith(letter)
      );
      if (filtered.length === 0) {
        alert(`No countries found for "${letter}"`);
        return; // Prevent updating the state
      }
      setFilteredCountries(filtered);
      setCurrentIndex(0); // Reset to first country
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCountries.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredCountries.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return <p>Loading flags...</p>;
  }

  const currentCountry = filteredCountries[currentIndex];

  const { name, flags, capital, languages, currencies, region, maps } = currentCountry;

  const languageList = languages ? Object.values(languages).join(", ") : "N/A";
  const currencyList = currencies ? Object.values(currencies).map((c) => c.name).join(", ") : "N/A";

  return (
    <div className="flag-tp-app">
      <div className="flag-tp-container">
        <div className="filter-sidebar">
          <p><strong>Filter</strong></p>
          <div className="letters">
            {["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => (
              <button
                key={letter}
                className={`filter-btn ${selectedLetter === letter ? "active" : ""}`}
                onClick={() => handleFilter(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        <div className="slider-container">
          <div className="logo-container">
          <img src="/logoflag.png" alt="Country Flags Logo" className="logo" />
          </div>
          <div className="flag">
            <div className="left-arrow" onClick={handlePrevious}>
              &#8592;
            </div>
            <div className="flag-container">
              <img
                src={flags.png}
                alt={`Flag of ${name.common}`}
                className="image"
              />
            </div>
            <div className="right-arrow" onClick={handleNext}>
              &#8594;
            </div>
          </div>
          <p className="country-name">{name.common}</p>
          <div className="country-details">
            <p><strong>Continent:</strong> {region}</p>
            <p><strong>Capital:</strong> {capital ? capital[0] : "N/A"}</p>
            <p><strong>Languages:</strong> {languageList}</p>
            <p><strong>Currencies:</strong> {currencyList}</p>
            {maps && maps.googleMaps && (
              <p>
                <strong>Map:</strong>
                <a href={maps.googleMaps} target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlagTp;
