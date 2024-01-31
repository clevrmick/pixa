import React from "react";
import searchImages from "./api";
import SearchBar from "./components/searchBar/SearchBar";

export default function App() {
  const onSubmit = (term) => {
    console.log(`search the terms with this key, ${term}`);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <SearchBar onSubmit={onSubmit} />
    </div>
  );
}
