import React from "react";
import "./searchBar.css";
export default function SearchBar({ onSubmit }) {
  const [terms, setTerms] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(terms);
  };

  const handleChange = (event) => {
    setTerms(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input
          value={terms}
          type="search"
          placeholder="Search Images"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
