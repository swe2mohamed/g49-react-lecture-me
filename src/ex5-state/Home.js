import React, { useState } from "react";

export const Home = () => {
  const [name, setName] = useState("Alice")
  const [age, setAge] = useState(25)
  const handleClick = () => {
    setName("Sara")
    setAge(80)
  }
  return (
    <div className="container">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click on me</button>
      <p>{name} is {age} years old.</p>
    </div>
  );
};

export default Home;
