import Header from "@/components/partials/Header";
import React from "react";
import Navigation from "../../../Navigation";
import BreadCrumbs from "@/components/partials/BreadCrumbs";
import { FaPlus } from "react-icons/fa6";
import SystemTable from "./SystemTable";
import { StoreContext } from "@/store/StoreContext";
import { setIsSettingsOpen } from "@/store/StoreAction";

const System = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  React.useEffect(() => {
    dispatch(setIsSettingsOpen(true));
  }, []);

  return (
    <>
      <Header />
      <div className={`wrapper ${store.isShow ? "lg:ml-48" : "ml-1"}`}>
        <Navigation menu="settings" submenu="users" />
        <div className="py-3 ml-2 flex justify-between">
          <BreadCrumbs />
          <button className="flex items-center gap-1 text-primary">
            <FaPlus />
            Add
          </button>
        </div>
        <div className="text-base ">
          <h2>Users System</h2>
        </div>
        <SystemTable />
        <span className="my-6 block text-center">End of List.</span>
      </div>
    </>
  );
};

export default System;
