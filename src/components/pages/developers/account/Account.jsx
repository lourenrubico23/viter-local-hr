import React from "react";
import Header from "../../../partials/Header";
import Navigation from "../Navigation";
import AccountInfo from "./AccountInfo";

const Account = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navigation />
        <div className="title">
            <h2>Account</h2>
        </div>
        <AccountInfo/>
      </div>
    </>
  );
};

export default Account;
