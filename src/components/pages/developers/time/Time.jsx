import Header from "@/components/partials/Header";
import React from "react";
import Navigation from "../Navigation";
import { StoreContext } from "@/store/StoreContext";
import Footer from "@/components/partials/Footer";

const Time = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <Header />
      <div className={`wrapper ${store.isShow ? "lg:ml-48" : "ml-1"}`}>
        <Navigation menu="time" />
        <div className="title">
          <h2>Time</h2>
        </div>
        <span className="mt-5 block">We will be right back.</span>
      </div>
      <Footer />
    </>
  );
};

export default Time;
