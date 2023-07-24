import React from "react";

const Screen = ({ value, his }) => {
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
  return (
    <div className="screen ">
      <div className="inner-screen">{value ? toLocaleString(value) : 0}</div>
      <div className="previous">{his ? toLocaleString(his) : 0}</div>
    </div>
  );
};
export default Screen;
