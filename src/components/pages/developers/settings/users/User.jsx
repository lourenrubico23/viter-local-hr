import React from "react";
import Header from "../../../../partials/Header";
import Navigation from "../../Navigation";
import UserList from "./UserList";
import Footer from "../../../../partials/Footer";
import { setIsSettingsOpen } from "../../../../../store/StoreAction";
import { StoreContext } from "@/store/StoreContext";

const User = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <div className={`wrapper ${store.isShow ? "lg:ml-48" : "ml-1"} `}>
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
