import React, { useEffect, useState } from "react";
import {
  iconPlus,
  iconUploadCloud,
  iconarrowDown,
  iconedit,
  icontrash,
} from "../../assets/icons/all-icon";
import demoImage from "../../assets/demo.png";
import Button from "../../components/button/Button";
import NavBar from "../../layout/navbar/NavBar";
import LeftIconButton from "../../components/button/LeftIconButton";

const Users = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const users = [
    {
      id: 1,
      name: "User1",
      email: "user1@example.com",
      about: "About User1",
      status: "Random Sticker Label",
    },
    {
      id: 2,
      name: "User1",
      email: "user1@example.com",
      about: "About User1",
      status: "Customer",
    },
    {
      id: 3,
      name: "User1",
      email: "user1@example.com",
      about: "About User1",
      status: "Customer",
    },
    {
      id: 4,
      name: "User1",
      email: "user1@example.com",
      about: "About User1",
      status: "Customer",
    },
    {
      id: 5,
      name: "User1",
      email: "user1@example.com",
      about: "About User1",
      status: "Customer",
    },
    // Add more user data here
  ];

  useEffect(() => {
    // Set selectAll to true when at least one user is selected
    setSelectAll(selectedUsers.length > 0);
  }, [selectedUsers]);

  const toggleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    if (!selectAll) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const toggleSelect = (userId) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        // User is unselected
        const updatedSelected = prevSelected.filter((id) => id !== userId);
        setSelectAll(updatedSelected.length > 0);
        return updatedSelected;
      } else {
        // User is selected
        setSelectAll(true);
        return [...prevSelected, userId];
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto max-w-7xl flex justify-between my-[33px]">
        <h1 className="text-2xl font-medium leading-[38px] text-gray-900 ">
          Users
        </h1>
        <div className="flex">
          <LeftIconButton
            butoonText={"Previous"}
            fontSize={"text-sm"}
            paddingX={"px-3.5"}
            paddingY={"py-2"}
            border={"border border-gray-300"}
            borderRadius={"rounded-lg"}
            shadow={"shadow-sm"}
            background={"bg-white"}
            buttonIcon={iconUploadCloud}
            marginRight={"mr-3"}
          />
          <LeftIconButton
            butoonText={"Add user"}
            fontSize={"text-sm"}
            paddingX={"px-3.5"}
            paddingY={"py-2"}
            border={"border border-gray-300"}
            borderRadius={"rounded-lg"}
            shadow={"shadow-sm"}
            background={"bg-primary-color"}
            buttonIcon={iconPlus}
            fontColor={"text-white"}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-8 rounded-lg overflow-hidden border border-gray-200">
        <table className="min-w-full bg-white">
          <thead>
            <tr className=" bg-gray-50">
              <th className="flex items-center px-6 py-3 text-xs text-left text-gray-500">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="mr-3"
                />
                User Info
                <img src={iconarrowDown} alt="" className=" w-4 h-4 ml-1" />
              </th>
              <th className="px-6 py-3 border text-xs text-left text-gray-500">
                About
              </th>
              <th className="px-6 py-3 border text-xs text-left text-gray-500">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className=" px-6 py-4 border">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleSelect(user.id)}
                    />
                    <img
                      // src={`user-image-path/${user.id}.jpg`}
                      src={demoImage}
                      alt={`User ${user.name}`}
                      className="w-8 h-8 rounded-full mx-3"
                    />
                    <div className="ml-2 flex flex-col">
                      <div className="text-sm font-medium leading-5 text-gray-900 ">
                        {user.name}
                      </div>
                      <div className="text-sm font-normal leading-5 text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 border">
                  <div className="ml-2 flex flex-col">
                    <div className="text-sm font-normal leading-5 text-gray-900 ">
                      {user.name}
                    </div>
                    <div className="text-sm font-normal leading-5 text-gray-500">
                      {user.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 border">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md rounded-xl bg-green-50 px-2 py-1 text-xs font-medium text-green-700 leading-[18px] ring-1 ring-inset ring-green-600/20">
                      {user.status}
                    </span>
                    <div className="ml-2">
                      <button className=" w-5 h-5 mr-[10px]">
                        <img src={icontrash} alt="" />
                      </button>
                      <button className="w-5 h-5">
                        <img src={iconedit} alt="" />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center px-6 pt-3 pb-4 bg-gray-100">
          <Button
            butoonText={"Previous"}
            fontSize={"text-sm"}
            paddingX={"px-3.5"}
            paddingY={"py-2"}
            border={"border border-gray-300"}
            borderRadius={"rounded-lg"}
            shadow={"shadow-sm"}
            background={"bg-white"}
          />
          <div>Page 1 of 10</div>
          <Button
            butoonText={"Next"}
            fontSize={"text-sm"}
            paddingX={"px-3.5"}
            paddingY={"py-2"}
            border={"border border-gray-300"}
            borderRadius={"rounded-lg"}
            shadow={"shadow-sm"}
            background={"bg-white"}
          />
        </div>
      </div>
    </>
  );
};

export default Users;