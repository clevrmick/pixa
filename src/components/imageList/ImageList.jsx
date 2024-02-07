import React from "react";
import ImageCard from "../imageCard/ImageCard";
export default function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div>{renderedImages}</div>;
}
