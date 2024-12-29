import React, { useState } from 'react';
function CitySelect() {
const [selectedCity, setSelectedCity] = useState('');
const [cities, setCities] = useState(['Paris', 'London', 'New York']);
const handleCityChange = (e) => {
setSelectedCity(e.target.value);
};
const addCity = () => {
setCities([...cities, 'Tokyo']); // Ajout de la ville "Tokyo"
};
return (
<div>
<h3>Select your city:</h3>
<button onClick={addCity}>Add Tokyo</button>
<select value={selectedCity} onChange={handleCityChange}>
{cities.map((city, index) => (
<option key={index} value={city}>
{city}
</option>
))}
</select>
<p>Selected City: {selectedCity}</p>
</div>
);
}
export default CitySelect;