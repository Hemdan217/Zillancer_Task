import React from "react";

export const Wraper = ({ children, bgColor }) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: bgColor }}>
      <div className="container">{children}</div>
    </div>
  );
};
