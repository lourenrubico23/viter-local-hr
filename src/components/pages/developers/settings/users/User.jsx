import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../navigation/Navigation";
import { Link } from "react-router-dom";
import { FaDev } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import UserList from "./UserList";
import Footer from "../../../../partials/Footer";

const User = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navigation menu="settings" submenu="users" />
        <div className="title">
          <h2>Users</h2>
        </div>
        <div>
          <UserList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
