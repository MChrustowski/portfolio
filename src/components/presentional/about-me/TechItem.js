import React from "react";

export default ({ icon, name, rate, lack }) => {
  return (
    <tr>
      <td id="icon">
        <i className={icon} />
      </td>
      <td id="name">{name}</td>
      <td id="rate">
        {rate}
        <span style={{ color: "#cccccc" }}>{lack}</span>
      </td>
    </tr>
  );
};
