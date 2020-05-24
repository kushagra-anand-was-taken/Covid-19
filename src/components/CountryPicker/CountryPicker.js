import React from "react";
import { fetchCountries } from "../../api";
import { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setCountries(await fetchCountries());
    };
    fetchApi();
  }, []);

  return (
    <div className={styles.size}>
      <select
        defaultValue=""
        className={`custom-select container`}
        onChange={(e) => props.handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryPicker;
