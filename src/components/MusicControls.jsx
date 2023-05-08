import { useState } from "react";
import IconButton from "./IconButton";
import { IoPlay, IoPlayBack, IoPlayForward, IoPause } from "react-icons/io5";

const MusicControls = () => {
  const [play, setPlay] = useState(false);

  const musicPlayHandler = () => {
    setPlay((currentState) => {
      return !currentState;
    });
  };
  return (
    <div className="flex gap-2 min-w-full justify-center items-center">
      <IconButton size="medium" icon={<IoPlayBack size={35} />} />
      <IconButton
        size="large"
        icon={
          play ? (
            <IoPlay onClick={musicPlayHandler} size={45} />
          ) : (
            <IoPause onClick={musicPlayHandler} size={45} />
          )
        }
      />
      <IconButton size="medium" icon={<IoPlayForward size={35} />} />
    </div>
  );
};

export default MusicControls;
