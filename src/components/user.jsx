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
    this.setState({ planet: "saturn" });
  }
  //static getDerivedStateFromProps(prop, state) {
  //console.log("I'm from get derived state from props");
  // return { planet: "Jupiter" };
  //}

  shouldComponentUpdate(nextProp, nextState) {
    console.log(" from shouldComponentUpdate");
    console.log({
      nextProp,
      nextState,
    });
    return true;
  }

  getSnapshotBeforeUpdate(prevprop, prevState) {
    console.log(" from getSnapshotBeforeUpdate");
    console.log({
      prevprop,
      prevState,
    });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
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
