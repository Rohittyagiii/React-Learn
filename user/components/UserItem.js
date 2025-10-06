import React from "react";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div className="user-item__image">
          <img src={props.img} alt={props.name}  style={{ height: "200px", width: "200px" }} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "place" : "places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
