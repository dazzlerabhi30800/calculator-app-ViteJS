import React from "react";

const Screen = ({ value }) => {
  const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
  return (
    <div className="screen ">
      <div className="inner-screen">{toLocaleString(value)}</div>
    </div>
  );
};
export default Screen;
