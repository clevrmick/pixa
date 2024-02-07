import React from "react";
import SearchBar from "./components/searchBar/SearchBar";
import ImageList from "./components/imageList/ImageList";
import searchImages from "./api";

export default function App() {
  const [images, setImages] = React.useState([]);
  const onSubmit = async (term) => {
    // console.log(`search the terms with this key, ${term}`);
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <h1>Welcome</h1>
      <SearchBar onSubmit={onSubmit} />
      <ImageList images={images} />
    </div>
  );
}
