import React from "react";

export default function ImageCard({ image }) {
  console.log(image);
  return (
    <div>
      <img src={image.urls.small} alt="" />
    </div>
  );
}
