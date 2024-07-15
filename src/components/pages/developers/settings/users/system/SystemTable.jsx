import SearchBar from "@/components/partials/SearchBar";
import Status from "@/components/partials/Status";
import React from "react";
import { FaEdit, FaUserAltSlash } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

const SystemTable = () => {
  return (
    <>
      <SearchBar />
      <div className="shadow-md rounded-md overflow-auto">
        <table>
          <thead>
            <tr>
              <th className="pl-2">#</th>
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pl-2">1.</td>
              <td>
                <Status text="Inactive" />
              </td>
              <td>Louren Rubico</td>
              <td>Lourenrubico@gmail.com</td>
              <td className="flex items-center gap-3 justify-end">
                <button className="tooltip-action-table" data-tooltip="Edit">
                  <FaEdit className="text-gray-600" />
                </button>
                <button
                  className="tooltip-action-table"
                  data-tooltip="Inactivate"
                >
                  <FaUserAltSlash className="text-gray-600" />
                </button>
                <button
                  className="tooltip-action-table"
                  data-tooltip="Password"
                >
                  <FaKey className="text-gray-600" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SystemTable;
