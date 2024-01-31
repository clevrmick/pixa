import React from "react";

export default function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onsubmit("cars");
  };
  return (
    <input type="search" placeholder="Search Images" onClick={handleClick} />
  );
}
