import React from "react";
import "./DashboardOverView.css";
import Link from "next/link";
import Image from "next/image";
const DashboardOverView = () => {
  return (
    <>
      <main className="p-6 space-y-6 m-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-3xl font-bold text-purple-700 mt-2">1,240</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">$24,500</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">New Orders</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">320</h2>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500">Pending Tickets</p>
            <h2 className="text-3xl font-bold text-red-500 mt-2">12</h2>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b font-bold text-purple-700">
            User List
          </div>
          <table className="w-full text-left">
            <thead className="bg-purple-50">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">John Doe</td>
                <td className="p-4">john@example.com</td>
                <td className="p-4">Admin</td>
                <td className="p-4 text-green-600 font-bold">Active</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Jane Smith</td>
                <td className="p-4">jane@example.com</td>
                <td className="p-4">Editor</td>
                <td className="p-4 text-yellow-500 font-bold">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700">
            Add User
          </button>
          <button className="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">
            Export Data
          </button>
          <button className="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">
            Generate Report
          </button>
          <button className="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">
            Delete Records
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
          {/* <img
                className="w-[10px] h-[10px] rounded-full shadow"
                src={logoImg}
                alt="Profile"
              /> */}
          <div className="profile-icon-role-desh ring-amber-300 relative">
            <Image
              fill={true}
              src="/assets/logo.jpg"
              alt="profile icon"
              className="rounded-full ring-amber-400 ring-2"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold text-purple-700">Sophia Ray</h3>
            <p className="text-gray-500 mb-3">Administrator</p>
            <Link
              href="/dashboard/ProfileUptade"
              class="mt-2 bg-purple-600 text-white px-4 py-2  rounded-lg shadow hover:bg-purple-700"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardOverView;
