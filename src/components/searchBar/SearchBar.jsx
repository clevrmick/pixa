import React from "react";

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
    <div className="search">
      <form onSubmit={handleFormSubmit}>
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
