import React from "react";
import "./ServiceItemSideBar.css";
import Image from "next/image";
const ServiceItemSideBar = () => {
  return (
    <div class="container w-50">
      <div class="styleHero-feature-container bg-white rounded shadow-lg mb-2 mx-2">
        <div class="row justify-content-between align-items-center">
          {/* <!-- Feature content-01  --> */}
          <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
            <div className="img-fluid mx-auto d-block rounded sideImg relative">
              <Image
                fill={true}
                src="/assets/images/hf1.jpg"
                alt="Hero-feature"
              />
            </div>
            <h2 class="styleFeater-title text-center py-2">Best Deal</h2>
          </div>

          {/* <!-- Feature content-02  --> */}
          <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
            <div className="img-fluid mx-auto d-block rounded sideImg relative">
              <Image
                fill={true}
                src="/assets/images/hf2.jpg"
                alt="Hero-feature"
              />
            </div>
            <h2 class="styleFeater-title text-center py-2">
              AC Repair Services
            </h2>
          </div>
          {/* <!-- Feature content-03  --> */}
          <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
            <div className="img-fluid mx-auto d-block rounded sideImg relative">
              <Image
                fill={true}
                src="/assets/images/hf3.jpg"
                alt="Hero-feature"
              />
            </div>
            <h2 class="styleFeater-title text-center py-2">Appliance Repair</h2>
          </div>
          {/* <!-- Feature content-04  --> */}
          <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
            <div className="img-fluid mx-auto d-block rounded sideImg relative">
              <Image
                fill={true}
                src="/assets/images/hf4.jpg"
                alt="Hero-feature"
              />
            </div>
            <h2 class="styleFeater-title text-center py-2">
              Beauty & Wellness
            </h2>
          </div>
          {/* <!-- Feature content-05  --> */}
          <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
            <div className="img-fluid mx-auto d-block rounded sideImg relative">
              <Image
                fill={true}
                src="/assets/images/hf5.jpg"
                alt="Hero-feature"
              />
            </div>
            <h2 class="styleFeater-title text-center py-2">
              Men's Care & Salon
            </h2>
          </div>
          {/* <!-- Feature content-06  --> */}
          <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
            <div className="img-fluid mx-auto d-block rounded sideImg relative">
              <Image
                fill={true}
                src="/assets/images/hf6.jpg"
                alt="Hero-feature"
              />
            </div>
            <h2 class="styleFeater-title text-center py-2">Cleaning</h2>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ServiceItemSideBar;
