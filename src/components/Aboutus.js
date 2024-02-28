import UserClass from "./Userclass";
import React from "react";

class Aboutus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hola",
    };
    console.log(this.state.name, "parent Constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    return (
      <div>
        <div>About us Page</div>
        <UserClass name={"Girish"} />
      </div>
    );
  }
}

export default Aboutus;
