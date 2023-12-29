import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "",
        location: "",
        contact: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/ruzbihanzaleek");

    const data = await res.json();

    this.setState({
      userInfo: data,
    });

    // console.log("Component Did Mount");
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    const { name, location, company, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h2>
          Count_1: {count}, Count_2: {count2}
        </h2>
        <div className="count-container">
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 1,
              });
            }}
            className="count-btn"
          >
            Count +
          </button>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
                count2: this.state.count2 - 1,
              });
            }}
            className="count-btn"
          >
            Count -
          </button>
        </div>
        <img src={avatar_url} alt="image" />
        <h3>Name: {name.replace(/([A-Z])/g, " $1").trim()}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
