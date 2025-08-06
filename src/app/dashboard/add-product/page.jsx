"use client";
import React, { useEffect, useState } from "react";
import "./ProductAddForm.css";
import { addProduct } from "@/app/actions/product";
// import Image from "next/image";
// import { useNavigate } from "react-router";
// import { useAddProductMutation } from "../../../features/api/apiSlice";
// import { toast } from "react-toastify";
// import Swal from "sweetalert2";

const ProductAddForm = () => {
  const initialization = {
    category: "",
    title: "",
    description: "",
    price: "",
    stock: "",
    sold: "",
    review: "",
    like: "",
    love: "",
    yelp: "",
    image: "",
  };
  const [product, setProduct] = useState(initialization);
  const [imgUrl, setImgUrl] = useState("");
  const [categories, setCategories] = useState([]);
  // const navigate = useNavigate();
  // const [addProduct] = useAddProductMutation();
  useEffect(() => {
    const getCategories = () => {
      fetch(`/api/category`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCategories(data);
          setProduct((prev) => ({ ...prev, category: data[0]._id }));
        });
    };
    getCategories();
  }, []);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "price" ? Number(e.target.value) : e.target.value,
    });
    // console.log(e.target.name);
  };
  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "api-with-firebase-ecommerce");
    data.append("cloud_name", "dstcwxwn9");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dstcwxwn9/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const result = await res.json();
    const img = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };
    console.log(result, "res");
    setProduct({ ...product, image: img });
    setImgUrl(result.secure_url);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!product.image) {
      return alert(`Please Wait until the image uploading is done`);
    }

    // if (!product.image) {
    //   toast("Image is't done uploading, please waite....");
    //   return;
    //  console.log(product)
    addProduct(product);
    // Swal.fire("Successful!", `You have Submit !`, "success");
  };
  // console.log(product)
  return (
    <>
      <div className="container mx-auto p4-10 mb-22">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full px-6 py-8 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>
              <p className="mt-4 text-gray-600">
                Please fill complete your product add form.
              </p>
              <form onSubmit={submitHandler} className="mt-6">
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="expiration_date"
                  >
                    Category
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expiration_date"
                    type="text"
                    value={product.category}
                    name="category"
                    required
                    placeholder="Category"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="name"
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={product.title}
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="card_number"
                  >
                    Description
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="card_number"
                    value={product.description}
                    type="text"
                    name="description"
                    required
                    placeholder="Description"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="email"
                  >
                    Price
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="number"
                    value={product.price}
                    name="price"
                    required
                    placeholder="Price"
                    onChange={handleChange}
                  />
                </div>

                {/* Store Sold  */}
                <div className="flex justify-around items-center gap-1">
                  <div className="mb-6">
                    <label
                      className="block text-gray-800 font-bold mb-2"
                      htmlFor="email"
                    >
                      Stock
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="number"
                      value={product.stock}
                      name="stock"
                      required
                      placeholder="Stock"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-800 font-bold mb-2"
                      htmlFor="email"
                    >
                      Sold
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="number"
                      value={product.sold}
                      name="sold"
                      required
                      placeholder="Sold"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-800 font-bold mb-2"
                      htmlFor="email"
                    >
                      Review
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="number"
                      value={product.review}
                      name="review"
                      required
                      placeholder="Review"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {/* Like Love yelp  */}
                <div className="flex justify-around items-center gap-1">
                  <div className="mb-6">
                    <label
                      className="block text-gray-800 font-bold mb-2"
                      htmlFor="email"
                    >
                      Like
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="number"
                      value={product.like}
                      name="like"
                      required
                      placeholder="Like"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-800 font-bold mb-2"
                      htmlFor="email"
                    >
                      Love
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="number"
                      value={product.love}
                      name="love"
                      required
                      placeholder="Love"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-800 font-bold mb-2"
                      htmlFor="email"
                    >
                      Yelp
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="number"
                      value={product.yelp}
                      name="yelp"
                      required
                      placeholder="Yelp"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    htmlFor="cvv"
                  >
                    Product Image URL
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cvv"
                    type="file"
                    name="image"
                    placeholder="***"
                    onChange={handleChangeImage}
                  />
                </div>
                {product.image && (
                  <img
                    src={imgUrl}
                    alt={product.title}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "5px",
                    }}
                  />
                )}
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAddForm;
