import React from "react";
import "./Admin.css";
const Admin = () => {
  return (
    <>
      <div className="mb-52">
        <table className="min-w-full divide-y divide-gray-200 overflow-x-auto  my-14">
          <thead className="bg-gray-50">
            <tr className="bg-gray-950 text-white h-12">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-8 divide-gray-100 h-80">
            <tr className="h-28 bg-indigo-500/15">
              <td className="px-6 py-4 whitespace-nowrap h-28">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <div className="text-sm text-gray-900">
                  Regional Paradigm Technician
                </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td className=" py-4 whitespace-nowrap  text-sm font-medium">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 bg-orange-500 px-5 py-1 rounded hover:bg-orange-600"
                >
                  Edit
                </button>
                <button
                  href="#"
                  className="ml-2 text-gray-900 hover:text-black  bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr className="h-28 bg-red-500/15">
              <td className="px-6 py-4 whitespace-nowrap h-28">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  Regional Paradigm Technician
                </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td className=" py-4 whitespace-nowrap  text-sm font-medium">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 bg-orange-500 px-5 py-1 rounded hover:bg-orange-600"
                >
                  Edit
                </button>
                <button
                  href="#"
                  className="ml-2 text-gray-900 hover:text-black  bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr className="h-28 bg-green-500/15">
              <td className="px-6 py-4 whitespace-nowrap h-28">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  Regional Paradigm Technician
                </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td className=" py-4 whitespace-nowrap  text-sm font-medium">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 bg-orange-500 px-5 py-1 rounded hover:bg-orange-600"
                >
                  Edit
                </button>
                <button
                  href="#"
                  className="ml-2 text-gray-900 hover:text-black  bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr className="h-28 bg-fuchsia-500/15">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.pravatar.cc/150?img=1"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div className="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  Regional Paradigm Technician
                </div>
                <div className="text-sm text-gray-500">Optimization</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
              </td>
              <td className=" py-4 whitespace-nowrap  text-sm font-medium">
                <button
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 bg-orange-500 px-5 py-1 rounded hover:bg-orange-600"
                >
                  Edit
                </button>
                <button
                  href="#"
                  className="ml-2 text-gray-900 hover:text-black  bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>

            {/* More rows... */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
