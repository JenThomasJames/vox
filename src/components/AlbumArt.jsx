import React from "react";

const AlbumArt = ({ imageUrl }) => {
  return (
    <div className="flex justify-center min-w-full">
      <div className="w-80 h-80 bg-slate-400 rounded-lg object-cover">
        <img
          src={imageUrl ? imageUrl : null}
          alt="image"
          className="w-full h-auto object-fill rounded-lg"
        />
      </div>
    </div>
  );
};

export default AlbumArt;
