import React from "react";

const Header = (props) => {
    const {bgColor, text} = props;
  return (
    <header className={`container-fluid bg-${bgColor ? bgColor : "secondary"} text-white pt-5 pb-5`}>
      <div className="container">
        <h1>{text && text }</h1>
        <h2>{!text && "Default Header Text"}</h2>
      </div>
    </header>
  );
};

export default Header;
