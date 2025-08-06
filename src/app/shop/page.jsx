import React from "react";
import "./Shop.css";
import ProductCard from "../components/Products/ProductCard/ProductCard";
import Pagination from "@/app/components/Pagination/Pagination";
import SearchProduct from "@/app/components/searchProduct/searchProduct";
import SlottingCategories from "../components/SlottingCategories/SlottingCategories";

const getProductsForShop = async (searchParamsData) => {
  const newSearchParams = new URLSearchParams({
    page: searchParamsData?.page || 1,
  }).toString();
  // console.log(newSearchParams, "New create Search Params by js core api URLSearchParams ")
  const res = await fetch(
    `http://localhost:3000/api/product?${newSearchParams}`
  );
  if (!res.ok) {
    throw new Error(
      "Failed to fetch products your data does not GET by Database please check your Data connection"
    );
  }
  const data = await res.json();
  // console.log(data);
  return {
    products: data?.products,
    currentPage: data?.currentPage,
    totalPages: data?.totalPages,
  };
};

const Shop =  async ({ searchParams }) => {
   const params = await searchParams;
  // console.log( params, "searchParams special type of Props in next js ");
  const data = await getProductsForShop(params);
  return (
    <div className="">
      <main className="flex-center">
        <SlottingCategories />
        <div className="main-content">
          <SearchProduct />
          <section className="products">
            <ProductCard data={data}   />
          </section>
        </div>
      </main>
      <Pagination totalPages={data?.totalPages} pathname={"/"} />
    </div>
  );
};

export default Shop;
