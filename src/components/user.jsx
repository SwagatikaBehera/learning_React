import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "earth", //data only User component can hold,no other component can access this data
    };
    console.log("Hye I'm from Constructor");
  }

  componentDidMount() {
    this.setState({ planet: "mars" });
  }

  render() {
    console.log("Hey I'm from Render()");
    return (
      <div>
        <h1> {this.props.name} </h1>
        <p> {this.props.description} </p>
        <h3> {this.state.planet} </h3>
      </div>
    );
  }
}

export default User;
