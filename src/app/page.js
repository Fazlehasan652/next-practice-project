import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";
import ProductCard from "./components/Products/ProductCard/ProductCard";
import SearchProduct from "./components/searchProduct/searchProduct";
import SlottingCategories from "./components/SlottingCategories/SlottingCategories";

const getProducts = async (searchParamsData) => {
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

export default async function Home({ searchParams }) {
  // console.log( searchParams, "searchParams special type of Props in next js ");
  const params = await searchParams;
  // console.log( params, "searchParams special type of Props in next js ");
  const {products,totalPages} = await getProducts(params);
  // console.log(products, "products");
  return (
    <>
      <Header />

      <main className="flex-center">
        <SlottingCategories />
        <div className="main-content">
          <SearchProduct />
          <section className="products">
            <ProductCard products={products} />
          </section>
        </div>
      </main>
      <div className="flex justify-center items-center mb-14">
        <Pagination totalPages={totalPages} pathname={"/"} />
      </div>
    </>
  );
}
