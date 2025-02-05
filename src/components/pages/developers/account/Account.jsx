import React from "react";
import Header from "../../../partials/Header";
import Navigation from "../Navigation";
import AccountInfo from "./AccountInfo";
import { StoreContext } from "@/store/StoreContext";
import Footer from "@/components/partials/Footer";

const Account = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      <Header />
      <div className={`wrapper ${store.isShow ? "lg:ml-48" : "ml-1"}`}>
        <Navigation />
        <div className="title">
          <h2>Account</h2>
        </div>
        <AccountInfo />
        <Footer />
      </div>
    </>
  );
};

export default Account;
