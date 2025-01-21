import React from 'react';

const GreenBadge = ({ title }) => {
  return (
    <span style={{ backgroundColor: "#6AD2C8", color: "white", padding: "2px", marginInline: "1px", marginTop: "10px", marginBottom: "4px" }}>
      {title}
    </span>
  );
};

export default GreenBadge;