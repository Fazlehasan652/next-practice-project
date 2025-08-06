import React from "react";
import "./Services.css";
import ServiceItemSideBar from "../components/ServiceItemSideBar/ServiceItemSideBar";
import ServiceItem from "../components/ServiceItem/ServiceItem";



const Services = () => {
  return (
    <>
      <div className="grid grid-flow-col">
        <ServiceItemSideBar />
        <ServiceItem />
      </div>
    </>
  );
};

export default Services;
