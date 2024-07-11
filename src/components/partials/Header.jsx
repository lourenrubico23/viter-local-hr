import React from "react";

const Header = () => {
  return (
    <>
      <header className="fixed w-full bg-white ">
        <div className="w-full border-b-[2px] border-primary">
          <div className="flex items-center gap-4">
            <a href="#">
              <img src="http://via.placeholder.com/176x64" alt="" />
            </a>
            <h1 className="ml-4">HRIS and Payroll</h1>
            <button></button>
          </div>
          
        </div>
      </header>
    </>
  );
};

export default Header;
