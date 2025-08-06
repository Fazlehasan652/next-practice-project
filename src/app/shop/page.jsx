export const dynamic = "force-dynamic";
import "./Shop.css";
import ProductCard from "../components/Products/ProductCard/ProductCard";
import Pagination from "@/app/components/Pagination/Pagination";
import SearchProduct from "@/app/components/searchProduct/searchProduct";
import SlottingCategories from "../components/SlottingCategories/SlottingCategories";

const getProductsForShop = async (searchUpdData) => {
  const newSearchParams = new URLSearchParams({
    page: searchUpdData?.page || 1,
    minPrice: searchUpdData?.minPrice || "",
    maxPrice: searchUpdData?.maxPrice || "",
    category: searchUpdData?.category || "",
  }).toString();
  // console.log(newSearchParams, "New create Search Params by js core api URLSearchParams ")
  try {
    const res = await fetch(
      `http://localhost:3000/api/product?${newSearchParams}`,
    );
    if (!res.ok) {
      throw new Error(
        "Failed to fetch products your data does not GET by Database please check your Data connection",
      );
    }
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return { products: [], currentPage: 1, totalPages: 1 };
  }
};

const Shop = async ({ searchParams }) => {
  const { page, minPrice, maxPrice, category } = await searchParams;
  const upd = { page, minPrice, maxPrice, category };
  // console.log( upd, "searchParams special type of Props in next js ");
  const { products, currentPage, totalPages } = await getProductsForShop(upd);
  // console.log(products, "products")
  return (
    <div className=''>
      <main className='flex-center'>
        <SlottingCategories />
        <div className='main-content'>
          <SearchProduct />
          <section className='products'>
           
            <ProductCard products ={products} />
          </section>
        </div>
      </main>
      <Pagination currentPage={currentPage} totalPages={totalPages} pathname={"/"} />
    </div>
  );
};

export default Shop;
