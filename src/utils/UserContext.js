const { createContext } = require("react");

const UserContext = createContext({
  loggedUser: "Admin",
});

export default UserContext;
