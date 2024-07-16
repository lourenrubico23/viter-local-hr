import { setIsAdd, setIsItemEdit } from "@/store/StoreAction";
import { StoreContext } from "@/store/StoreContext";
import React from "react";

const ModalWrapper = ({ children, className, handleClose }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full flex justify-end z-50">
        <div
          className={`backdrop bg-black/30 h-full w-full absolute top-0 left-0 z-[-1]`}
          onClick={handleClose}
        ></div>
        <div className={`modal-wrapper ${className}`}>{children}</div>
      </div>
    </>
  );
};

export default ModalWrapper;
