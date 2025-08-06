import React from "react";
import "./AccountSettings.css";
const AccountSettings = () => {
  return (
    <>
      <div class="flex justify-center mt-20 px-8 mb-2">
        <form class="max-w-5xl mb-5">
          <div class="flex flex-wrap border rounded-lg p-30 dark:bg-gray-100 shadow-2xl">
            <h2 class="text-xl text-gray-600 dark:text-gray-950 pb-2">
              Account settings:
            </h2>

            <div class="flex flex-col gap-2 w-full border-gray-400">
              <div>
                <label class="text-gray-600 dark:text-gray-950">
                  User name
                </label>
                <input
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-200/10 dark:text-gray-950"
                  type="text"
                />
              </div>

              <div>
                <label class="text-gray-600 dark:text-gray-950">Email</label>
                <input
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-200/10 dark:text-gray-950"
                  type="email"
                />
              </div>
              <div>
                <label class="text-gray-600 dark:text-gray-950">
                  Designation
                </label>
                <input
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-200/10 dark:text-gray-950"
                  type="text"
                />
              </div>

              <div>
                <label class="text-gray-600 dark:text-gray-950">Bio</label>
                <textarea
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-200/10 dark:text-gray-900/30"
                  name="bio"
                ></textarea>
              </div>
              <div class="flex justify-between items-center">
                <input
                  class=" w-60 py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-200/10 dark:text-gray-950"
                  type="file"
                />
                <button
                  class="py-2.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                  type="submit"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AccountSettings;
