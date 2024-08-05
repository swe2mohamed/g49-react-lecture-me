import React from "react";


const NameLt = (props) => {
    const getLastName = (name) => {
      let lastname = name.split(" ")[1];
      return lastname;
    };
  return (
    <ul>
      {props.list.map((name, index) => (
        <li key={index}>
          <span className="text-info">{name}</span>
          - {getLastName(name.toUpperCase())}
        </li>
      ))}
    </ul>
  );
};

export default NameLt;
