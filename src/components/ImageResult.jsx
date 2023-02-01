import React from "react";
import ImageCard from "./ImageCard";
import Skeleton from "./skeleton";

const ImageResult = ({ listImages, isLoading }) => {
  return (
    <div className="container max-w-5xl mx-auto px-2 py-6 key={index}">
      <div className="grid md:grid-cols-2 gap-4">
        {isLoading ? (
          <Skeleton item={2} />
        ) : (
          listImages.map((image, index) => (
            <ImageCard image={image.url} key={index} />
          ))
        )}

        <p></p>
      </div>
    </div>
  );
};

export default ImageResult;
