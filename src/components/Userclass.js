import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "pankaj",
        bio: "worker",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/gdhoundiyal");
    const response = await data.json();

    console.log("response", response);
    this.setState({
      userinfo: response,
    });

    setInterval(() => {}, 1000);
  }

  render() {
    const { name, bio, avatar_url } = this.state.userinfo;

    return (
      <div>
        <img style={{ height: "100px", weight: "100px" }} src={avatar_url} />
        <h2>{name}</h2>
        <h3>{bio}</h3>
      </div>
    );
  }
}

export default UserClass;
