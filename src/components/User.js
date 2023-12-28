const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name: {props.name}</h3>
      <h3>Location: Wattala</h3>
      <h4>Contact: ruzbihanmzm@gmail.com</h4>
    </div>
  );
};

export default User;
