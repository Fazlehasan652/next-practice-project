import React from "react";
import "./DashboardTopBar.css";
const DashboardTopBar = () => {
  return (
    <>
      <div>
        <header class="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 class="text-xl font-bold text-purple-700">Dashboard</h1>
          <div class="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              class="px-4 py-2 border rounded-lg"
            />
            <div class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              SR
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default DashboardTopBar;
