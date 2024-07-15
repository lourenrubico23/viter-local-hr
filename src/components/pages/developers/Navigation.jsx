import React from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../store/StoreContext";
import { setIsSettingsOpen, setIsShow } from "../../../store/StoreAction";
import { GoChevronDown } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { BsFillCalendarEventFill, BsFillGrid1X2Fill } from "react-icons/bs";
import { MdTimer, MdWorkHistory } from "react-icons/md";
import { HiSpeakerphone, HiUserGroup } from "react-icons/hi";
import { FaBuildingUser, FaCalendarDays, FaIndent } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { devNavUrl } from "../../helpers/function-general";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const isMobileOrTablet = window.matchMedia("(max-width:1027px)").matches;

  const handleShow = () => {
    dispatch(setIsShow(!store.isShow));
  };

  const handleSettingsOpen = () => {
    dispatch(setIsSettingsOpen(!store.isSettingsOpen));
  };

  const handleShowNavigation = () => {
    // dispatch(setIsSearch(false));
    isMobileOrTablet
      ? setTimeout(() => {
          dispatch(setIsShow(!store.isShow));
        }, 10)
      : setTimeout(() => {
          dispatch(setIsShow(true));
        }, 10);
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

  React.useEffect(() => {
    if (!isMobileOrTablet) {
      dispatch(setIsShow(true));
    }
  }, [isMobileOrTablet]);

  return (
    <>
      <div
        className={`navigation ${
          store.isShow ? "translate-x-0" : "-translate-x-48"
        }`}
      >
        <div className={`navigation-wrapper overflow-hidden duration-200 `}>
          <div className="navigation-content">
            <nav className="navigation-list">
              <ul>
                <li
                  className={`${
                    menu === "overview"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link to={`${devNavUrl}/overview`}>
                    <div className="nav">
                      <BsFillGrid1X2Fill className="text-sm" />
                      <span className="!ml-2.5">OVERVIEW</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "time"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link to={`${devNavUrl}/time`}>
                    <div className="nav">
                      <MdTimer className="text-base" />
                      <span>TIME</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "leave"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link to={`${devNavUrl}/leave`}>
                    <div className="nav">
                      <BsFillCalendarEventFill />
                      <span className="!ml-3">LEAVE</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "overtime"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link>
                    <div className="nav">
                      <MdWorkHistory className="text-sm" />
                      <span className="!ml-3">OVERTIME</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "employees"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link>
                    <div className="nav">
                      <HiUserGroup className="text-sm" />
                      <span className="!ml-3">EMPLOYEES</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "client"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link>
                    <div className="nav">
                      <FaBuildingUser className="text-sm" />
                      <span className="!ml-3">CLIENT</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "announcement"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link>
                    <div className="nav">
                      <HiSpeakerphone className="text-sm" />
                      <span className="!ml-3">ANNOUNCEMENT</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "calendar-rd-l"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link>
                    <div className="nav">
                      <FaCalendarDays className="text-sm" />
                      <span className="!ml-3">CALENDAR RD & L</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`${
                    menu === "work-schedule"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <Link>
                    <div className="nav">
                      <FaBuildingUser className="text-sm" />
                      <span className="!ml-3">WORK SCHEDULE</span>
                    </div>
                  </Link>
                </li>

                <li
                  className={`pr-2.5 pl-4 py-0.5 w-full ${
                    menu === "payroll"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                >
                  <div className="nav">
                    <GiPayMoney className="text-sm" />
                    <span className="!ml-3.5">PAYROLL</span>
                  </div>
                  <GoChevronDown />
                </li>

                <li
                  className={`pr-2.5 pl-4 py-0.5 w-full ${
                    menu === "settings"
                      ? "bg-secondary text-white"
                      : "hover:bg-secondary/40"
                  }`}
                  onClick={handleSettingsOpen}
                >
                  <div className="nav">
                    <IoMdSettings className="text-sm" />
                    <span className="!ml-3">SETTINGS</span>
                  </div>
                  <GoChevronDown
                    className={`duration-200 text-[15px] ${
                      store.isSettingsOpen && "-rotate-180 duration-200 "
                    }`}
                  />
                </li>

                {store.isSettingsOpen && (
                  <ul className="submenu">
                    <li
                      className={`hover:text-accent border-l-2 border-transparent ${
                        submenu === "users"
                          ? "!border-accent !text-accent"
                          : "hover:border-white text-white"
                      }`}
                    >
                      <Link className="!p-0" to={`${devNavUrl}/settings/users`}>
                        User
                      </Link>
                    </li>
                    <li
                      className={`hover:text-accent border-l-2 border-transparent ${
                        submenu === "overview"
                          ? "!border-accent !text-accent"
                          : "hover:border-white text-white"
                      }`}
                    >
                      <Link
                        className="!p-0"
                        to={`${devNavUrl}/settings/overview`}
                      >
                        Overview
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            </nav>
          </div>
          <div
            className={`toggle-menu ${
              store.isShow ? "translate-x-44" : "translate-x-48"
            }`}
            onClick={handleShow}
          >
            <FaIndent className={` text-sm ${store.isShow && "rotate-180"}`} />

            {/* <RiMenuUnfoldFill onClick={handleShow} />
             */}
          </div>
        </div>
      </div>
      <span
        className={`${
          store.isShow ? "" : "translate-x-full"
        } fixed z-30 w-screen h-screen bg-dark/50 ${
          isMobileOrTablet ? "" : "lg:hidden"
        }`}
        onClick={handleShowNavigation}
        onTouchMove={handleShowNavigation}
      ></span>
    </>
  );
};

export default Navigation;
