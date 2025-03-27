import React from "react";

const UserCard = (props) => {
  return (
    <div>
      <h3>Name : {props.name}</h3>
      <h4>Role : {props.role}</h4>
    </div>
  );
};

export default UserCard;
