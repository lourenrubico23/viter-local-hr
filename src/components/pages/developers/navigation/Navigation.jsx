import React from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsSettingsOpen, setIsShow } from "../../../../store/StoreAction";
import { GoChevronDown } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { BsFillCalendarEventFill, BsFillGrid1X2Fill } from "react-icons/bs";
import { MdTimer, MdWorkHistory } from "react-icons/md";
import { HiSpeakerphone, HiUserGroup } from "react-icons/hi";
import { FaBuildingUser, FaCalendarDays } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
  };

  console.log(store.isShow);

  const handleSettingsOpen = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(setIsShow(false));
      } else {
        dispatch(setIsShow(true));
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <>
      <div className="navigation">
        <div className="navigation-wrapper">
          <div className="navigation-content">
            <nav>
              <ul>
                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "overview" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <BsFillGrid1X2Fill className="text-sm" />
                    OVERVIEW
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "time" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <MdTimer className="text-base" />
                    TIME
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "leave" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <BsFillCalendarEventFill />
                    LEAVE
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <MdWorkHistory className="text-sm" />
                    OVERTIME
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <HiUserGroup className="text-sm" />
                    EMPLOYEES
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <FaBuildingUser className="text-sm" />
                    CLIENT
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <HiSpeakerphone className="text-sm" />
                    ANNOUNCEMENT
                  </div>
                </li>

                <li
                  className={`pl-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <FaCalendarDays className="text-sm" />
                    <span>CALENDAR RD & L</span>
                  </div>
                </li>

                <li
                  className={`pl-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <FaBuildingUser className="text-lg" />
                    WORK SCHEDULE
                  </div>
                </li>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "overtime" ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <div className="nav">
                    <GiPayMoney className="text-lg" />
                    PAYROLL
                  </div>
                  <GoChevronDown />
                </li>
                <div className="submenu"></div>

                <li
                  className={`px-5 py-2 flex items-center justify-between text-white ${
                    menu === "settings" ? "bg-white/20 text-white" : ""
                  }`}
                  onClick={handleSettingsOpen}
                >
                  <div className="nav">
                    <IoMdSettings className="text-lg" />
                    SETTINGS
                  </div>
                  <GoChevronDown
                    className={`duration-200 text-[15px] ${
                      store.isSettingsOpen && "-rotate-180 duration-200 "
                    }`}
                  />
                </li>
                {store.isSettingsOpen && (
                  <div className="submenu">
                    <ul>
                      <li
                        className={`${
                          submenu === "users"
                            ? "border-l-2 border-accent text-accent px-1"
                            : "border-transparent text-white"
                        }`}
                      >
                        <Link to="/settings/users">User</Link>
                      </li>
                      <li
                        className={`${
                          submenu === "overview"
                            ? "border-l-2 border-accent text-accent px-1"
                            : "border-transparent text-white"
                        }`}
                      >
                        <Link to="/settings/overview">Overview</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </ul>
            </nav>
          </div>
          <div className={`toggle-menu ${!store.isShow && "translate-x-0"}`}>
            {store.isShow ? (
              <RiMenuFoldFill onClick={handleShow} />
            ) : (
              <RiMenuUnfoldFill onClick={handleShow} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
