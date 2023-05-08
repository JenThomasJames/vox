import React from "react";
import AlbumArt from "./AlbumArt";
import MusicControls from "./MusicControls";

const MusicMeta = () => {
  return (
    <div className="gap-5 flex-col flex items-center">
      <AlbumArt imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.latfusa.com%2Fmedia%2Fuploads%2F2015%2F10%2F02%2Fcc50uslwgae8s-f.jpg&f=1&nofb=1&ipt=961e0add769174c745b233e5b6ba8b98e8674c6f06a8936d3fa67005aa214678&ipo=images" />
      <div className="flex flex-col min-w-full items-center">
        <h1 className="font-semibold text-2xl">Waiting for Love</h1>
        <h2 className="text-slate-400">Stories</h2>
        <h2 className="text-slate-400">Avicii</h2>
      </div>
      <div className="min-w-full flex items-center gap-5">
        <p className="text-slate-400 text-xs">0:00</p>
        <input
          className="slider"
          type="range"
          name="music-slider"
          id="music-slider"
        />
        <p className="text-slate-400 text-xs">0:00</p>
      </div>
      <MusicControls />
    </div>
  );
};

export default MusicMeta;
