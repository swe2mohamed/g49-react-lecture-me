import React from "react";

const NameList = () => {
  // JS code variables, functions
  const names = ["Negar Bah", "Mehrada Jav", "Simon Eld"];

  const getLastName = (name) => {
    let lastname = name.split(" ")[1];
    return lastname;
  }

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          <span className="text-info">{name}</span> - {getLastName(name)} - {getLastName(name.toUpperCase())}
        </li>
      ))}
    </ul>
  );
};

export default NameList;
