import React from "react";
import { IoVolumeLow, IoVolumeHigh } from "react-icons/io5";

const VolumeControl = () => {
  return (
    <div className="flex gap-4 items-center">
      <IoVolumeLow />
      <input
        className="slider"
        type="range"
        name="music-slider"
        id="music-slider"
      />
      <IoVolumeHigh />
    </div>
  );
};

export default VolumeControl;
