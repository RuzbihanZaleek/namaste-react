import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutUs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <div>
          <UserContext.Consumer>
            {(data) => <span className="font-bold">{data.loggedUser}</span>}
          </UserContext.Consumer>
        </div>
        <h2>This is about us page</h2>
        <User name={"Ruzbihan Zaleek (function)"} />
        <UserClass
          name={"Ruzbihan Zaleek (class)"}
          location={"Wattala (class)"}
        />
      </div>
    );
  }
}

export default AboutUs;
