import React from "react";
import { FaDev, FaUserCog, FaUserTie } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { RiUserSharedFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <>
      <div className="list-content">
        <div className="list-button">
          <Link to="/settings/users/system" className="flex items-center gap-2">
            <span>
              <FaDev className="text-lg" />
              System
            </span>
            <GoChevronRight className="text-sm" />
          </Link>
        </div>
        <div className="list-button">
          <Link to="settings/users/admin" className="flex items-center gap-2">
            <span>
              <FaUserTie className="text-lg" />
              FBS Admin
            </span>
            <GoChevronRight className="text-sm" />
          </Link>
        </div>
        <div className="list-button">
          <Link to="settings/users/other" className="flex items-center gap-2">
            <span>
              <FaUserCog className="text-lg" />
              Other
            </span>
            <GoChevronRight className="text-sm" />
          </Link>
        </div>
        <div className="list-button">
          <Link to="settings/users/role" className="flex items-center gap-2">
            <span>
              <RiUserSharedFill className="text-lg" />
              Role
            </span>
            <GoChevronRight className="text-sm" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserList;
