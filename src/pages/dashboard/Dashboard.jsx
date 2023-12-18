import React from "react";
import NavBar from "../../layout/navbar/NavBar";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../feature/user-auth/UserSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const cureentMonthStatus = [
    {
      id: 1,
      title: "Profit",
      totalSale: "$240.94",
    },
    {
      id: 2,
      title: "Profit",
      totalSale: "$240.94",
    },
    {
      id: 3,
      title: "Profit",
      totalSale: "$240.94",
    },
    {
      id: 4,
      title: "Profit",
      totalSale: "$240.94",
    },
    {
      id: 5,
      title: "Profit",
      totalSale: "$240.94",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/signin");
  };

  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-7xl mt-8 overflow-hidden">
        <h1 className="text-2xl font-medium leading-[38px] text-gray-900 mb-8">
          This month Status
        </h1>
        <div className="flex flex-wrap justify-between">
          {cureentMonthStatus.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-gray-100 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>

                  <p className="text-2xl font-medium text-gray-900">
                    {item.totalSale}
                  </p>
                </div>

                <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
              </div>

              <div className="mt-1 flex gap-1 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>

                <p className="flex gap-2 text-xs">
                  <span className="font-medium"> 67.81% </span>

                  <span className="text-gray-500"> Since last week </span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
