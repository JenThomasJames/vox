import React from "react";

const IconButton = ({ icon }) => {
  return (
    <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200">
      {icon}
    </button>
  );
};

export default IconButton;
