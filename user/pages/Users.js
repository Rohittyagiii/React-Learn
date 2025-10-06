import React from "react";
import UserList from "../components/Userlist";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Shinchan",
      img: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
      places: 3
    },
  ]

  return <UserList items={USERS} />;
};

export default Users;
