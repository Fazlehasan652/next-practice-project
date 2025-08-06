import React from "react";
import "./DashboardSideBarNav.css";
import Link from "next/link";
const DashboardSideBarNav = () => {
  return (
    <>
      <aside className="w-64 bg-white shadow-md z-10">
        <div className="p-6 font-bold text-purple-700 text-2xl">AdminPanel</div>
        <nav className="mt-8">
          <Link
            href="/dashboard/admin"
            className="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Admin
          </Link>
          <Link
            href="/dashboard/users"
            className="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Users
          </Link>
          <Link
            href="/dashboard/officeStaff"
            className="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Office Staff
          </Link>
          <Link
            href="/dashboard/add-product"
            className="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Product Add Form
          </Link>
          <Link
            href="/dashboard/analytics"
            className="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Analytics
          </Link>
          <Link
            href="/dashboard/settings"
            className="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default DashboardSideBarNav;
