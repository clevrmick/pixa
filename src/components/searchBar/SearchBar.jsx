import React from "react";

export default function SearchBar({ onSubmit }) {
  //   const handleClick = () => {
  //     onSubmit("cars");
  //   };
  return (
    <div className="search">
      <input type="search" placeholder="Search Images" />
      <button onClick={() => onSubmit("Mansion")}>click</button>
    </div>
  );
}
