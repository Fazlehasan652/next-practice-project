import React from "react";
import "./SerciceCare.css";
import Image from "next/image";
const SerciceCare = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h3 class="h2 fw-bold mt-3">Because we care about your safety</h3> */}
      <div class="row align-items-center">
        <div class="grid grid-flow-row grid-cols-4">
          {/* <!-- Safety feature-01  --> */}
          <div class="">
            <div class="bg-white p-4 flex flex-col justify-center items-center">
              <div class="imgCare img-fluid relative">
                <Image
                  fill={true}
                  src="/assets/images/f1.jpg"
                  alt="Home Service"
                />
              </div>
              <h2 class="h6 fw-bold">Ensuring Masks</h2>
            </div>
          </div>
          {/* <!-- Safety feature-02  --> */}
          <div class="">
            <div class="bg-white p-4 flex flex-col justify-center items-center">
              <div class="imgCare img-fluid relative">
                <Image
                  fill={true}
                  src="/assets/images/f2.jpg"
                  alt="Home Service"
                />
              </div>
              <h2 class="h6 fw-bold">24/7 Support</h2>
            </div>
          </div>
          {/* <!-- Safety feature-03  --> */}
          <div class="">
            <div class="bg-white p-4 flex flex-col justify-center items-center">
              <div class="imgCare img-fluid relative">
                <Image
                  fill={true}
                  src="/assets/images/f3.jpg"
                  alt="Home Service"
                />
              </div>
              <h2 class="h6 fw-bold">Sanitizing Hands & Equipment</h2>
            </div>
          </div>
          {/* <!-- Safety feature-04  --> */}
          <div class="">
            <div class="bg-white p-4 flex flex-col justify-center items-center">
              <div class="imgCare img-fluid relative">
                <Image
                  fill={true}
                  src="/assets/images/f4.jpg"
                  alt="Home Service"
                />
              </div>
              <h2 class="h6 fw-bold">Ensuring Gloves</h2>
            </div>
          </div>
        </div>

        {/* <div class="col-lg-7">
          <div class="imgCare img-fluid relative">
                  <Image
                    fill={true}
                    src="/assets/images/f1.jpg"
                    alt="Home Service"
                  />
                </div>
        </div> */}
      </div>
    </div>
  );
};

export default SerciceCare;
