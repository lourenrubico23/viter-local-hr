import React from "react";
import { FaSave } from "react-icons/fa";

const AccountInfo = () => {
  return (
    <>
      <div className="content">
        <h2 className="border-b-2">INFORMATION</h2>
        <div className="py-8 pl-4">
          <ul className="grid grid-cols-[200px_1fr] text-left gap-y-6">
            <li className="font-bold">Name:</li>
            <li>Louren Isobel</li>
            <li className="font-bold">Email:</li>
            <li>Louren@gmail.com</li>
          </ul>
        </div>
        <h2 className="border-b-2">PASSWORD</h2>
        <div className="py-8 grid grid-cols-[215px_1fr] gap-y-7 items-center">
          <h3>Current Password: </h3>
          <input type="text" placeholder="Current Password" />
          <h3>New Password:</h3>
          <input type="text" placeholder="New Password" />
          <h3>Confirm New Password:</h3>
          <input type="text" placeholder="Confirm New Password" />
        </div>
        <div className="w-20 float-right">
          <button className="btn-modal-submit flex items-center gap-1.5">
            <FaSave />
            <span>Save</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;
