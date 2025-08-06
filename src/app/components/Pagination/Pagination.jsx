"use client";
import React from "react";
import "./pagination.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Pagination = ({ totalPages, pathname }) => {
  // console.log(totalPages, "totalPages.....................")
  const params = useSearchParams();
  const router = useRouter();
  const createQueryString = (name, value) => {
    // name = page; value = 2
    let newParams = new URLSearchParams(params.toString());

    newParams.set(name, value);
    // newParams.set("page", 2)
    // console.log(newParams, "newParams");

    return newParams.toString();
    //page=2
  };

  return (
    <div className="text-center">
      <div>
        <nav>
          <ul className="flex justify-center">
            {/* <i className="bi bi-chevron-left btns pagination__btn"></i> */}
            <i className="bi bi-chevron-left m-0.5 p-2 border-1 bg-green-500 hover:bg-green-400 text-shadow-black"></i>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <div className="flex justify-center items-center ">
                  <button
                    className=" m-[0.75px] p-2 border-1 bg-green-500 hover:bg-green-400 text-shadow-black "
                    onClick={() => {
                      // `/?page=2`
                      router.push(
                        `${pathname}?${createQueryString("page", page)}`
                      );

                      // '/?page=2'
                    }}
                  >
                    {page}
                  </button>
                </div>
              );
            })}
            <i className="bi bi-chevron-right m-0.5 p-2 border-1 bg-green-500 hover:bg-green-400 text-shadow-black"></i>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
