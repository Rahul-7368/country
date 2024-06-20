// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

// useEffect(() => {
//   const fetchCountries = async () => {
//     try {
//       const response = await fetch('https://xcountriesapi.onrender.com/all');

//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const data = await response.json();

//       // Logging the data to verify its structure
//       console.log(data);

//       // Ensure the data is an array
//       if (Array.isArray(data)) {
//         setCountries(data);
//       } else {
//         throw new Error('Data format is not an array');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchCountries();
// }, []);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredCountries = countries.filter((country) =>
//     country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    
//   );

//   return (
//     <div className="App">
//       <h1>Countries Search</h1>
//       <input
//         type="text"
//         placeholder="Search country..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <div className="countries-grid">
//         {filteredCountries.map((country) => (
//           <div key={country.name.common} className="country-card" style={{ flexDirection: 'column' }}>
//             <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
//             <p>{country.name.common}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="country-container">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div key={country.cca3} className="countryCard">
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
              <p>{country.name.common}</p>
            </div>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </div>
    </div>
  );
};

export default App;


