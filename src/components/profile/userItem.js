import React from "react";
// import PropTypes from "prop-types";
function UserItem({ user: { name, tag, location, avatar } }) {
  return (
    <div className="profile">
      <img className="avatar" src={avatar} alt="avatar"></img>
      <h2 className="name">{name}</h2>
      <p className="location">{location}</p>
      <p className="tag">{tag}</p>
    </div>
  );
}

// UserItem.PropTypes = {
//   name: PropTypes.string.isRequired,
// };

export default UserItem;
