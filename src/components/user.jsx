import React, { useState, useEffect } from "react";

const User = (props) => {
  const [planet, setPlanet] = useState("Earth");

  // componentDidMount
  useEffect(() => {
    console.log("byeeee");
    console.log("hho");
    //componentWillUnmount
    return console.log("bye");
  }, []);

  // componentDidUpdate
  // shouldComponenetUpdate
  useEffect(() => {
    console.log("planet changed");
  }, [planet]);

  console.log(planet);
  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.description} </p>
      <button onClick={() => setPlanet("neptune")}>{planet}</button>
    </div>
  );
};

export default User;
