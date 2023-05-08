import React from "react";

const IconButton = ({ icon, size = "small" }) => {
  let styles = "rounded-full bg-slate-100 hover:bg-slate-200 ";
  switch (size) {
    case "small":
      styles += "p-2";
      break;
    case "medium":
      styles += "p-4";
      break;
    case "large":
      styles += "p-6";
      break;

    default:
      styles += "p-2";
      break;
  }
  return <button className={styles}>{icon}</button>;
};

export default IconButton;
