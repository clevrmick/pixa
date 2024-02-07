import React from "react";
import ImageCard from "../imageCard/ImageCard";
import "./imageList.css";

export default function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{renderedImages}</div>;
}
