import React, { useRef, useState } from 'react';
function CheckboxForm() {
const checkboxRefs = useRef([]);
const [selectedSkills, setSelectedSkills] = useState([]);
const handleSelectAll = () => {
checkboxRefs.current.forEach((checkbox) => {
checkbox.checked = true;
});
updateSelectedSkills();
};
const handleDeselectAll = () => {
checkboxRefs.current.forEach((checkbox) => {
checkbox.checked = false;
});
updateSelectedSkills();
};
const updateSelectedSkills = () => {
const selected = checkboxRefs.current
.filter(checkbox => checkbox.checked)
.map(checkbox => checkbox.value);
setSelectedSkills(selected);
};
const handleSubmit = (e) => {
e.preventDefault();
alert(`Selected skills: ${selectedSkills.join(', ')}`);
};
return (
<form onSubmit={handleSubmit}>
<h3>Select your skills:</h3>
<label>
<input
type="checkbox"
value="React"
ref={el => (checkboxRefs.current[0] = el)}
onChange={updateSelectedSkills}
/>
React
</label>
<label>
<input
type="checkbox"
value="Node.js"
ref={el => (checkboxRefs.current[1] = el)}
onChange={updateSelectedSkills}
/>
Node.js
</label>
<label>
<input
type="checkbox"
value="JavaScript"
ref={el => (checkboxRefs.current[2] = el)}
onChange={updateSelectedSkills}
/>
JavaScript
</label>
<label>
<input
type="checkbox"
value="PHP"
ref={el => (checkboxRefs.current[3] = el)}
onChange={updateSelectedSkills}
/>
PHP
</label>
<label>
<input
type="checkbox"
value="HTML/CSS"
ref={el => (checkboxRefs.current[4] = el)}
onChange={updateSelectedSkills}
/>
HTML/CSS
</label>
<div>
<button type="button" onClick={handleSelectAll}>Select All</button>
<button type="button" onClick={handleDeselectAll}>Deselect
All</button>
</div>
<p>Selected Skills: {selectedSkills.join(', ')}</p>
<button type="submit">Voir la Resultat</button>
</form>
);
}
export default CheckboxForm;