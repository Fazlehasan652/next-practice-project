import React from "react";
import "./ProductDetails.css";
// import imges from "../../../assets/images/headphone.jpg";
import Image from "next/image";
import Link from "next/link";
const ProductDetails = () => {
  const product = "";
  const paramId = "";
  const addToHandler = () => {};
  return (
    <>
      <main key={paramId + 12} className="flex-center">
        <div className="main-content">
          <section className="product-details flex-center">
            <div className="product__details-left flex-center">
              <div className="flex flex-col gap-y-1.5 bg-gray-100/50 p-2">
                {/* <img key={product.id + 10} src={imges} alt="Headphone" /> */}
                <Image width={500} height={500} key={product.id + 10} src="/assets/images/headphone.jpg" alt="Headphone" />
                
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                  {/* Like  */}
                  <div className="flex justify-center items-center gap-1.5">
                    <span>
                      <i className="bi bi-hand-thumbs-up"></i>
                      {/* <i className="bi bi-hand-thumbs-up-fill"></i> */}
                    </span>
                    <small>2.2k</small>
                  </div>
                  {/* Love  */}
                  <div className="flex justify-center items-center gap-1.5">
                    <span>
                      {/* <i class="bi bi-heart-fill"></i> */}
                      <i className="bi bi-heart"></i>
                    </span>
                    <small>2.2k</small>
                  </div>
                  {/* yelp  */}
                  <div className="flex justify-center items-center gap-1.5">
                    <span>
                      {/* <i className="bi bi-yelp text-red-600"></i> */}
                      <i className="bi bi-yelp text-green-500"></i>
                    </span>
                    <small>2.2k</small>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-1.5">
                  <div>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <div>
                    <small>136</small> <small>reviews</small>
                  </div>
                </div>
              </div>
              </div>
              
            </div>
            <div className="product__details-right">
              <h3 key={product.id + 6} className="product__name">
                <strong>{product.title}</strong>
              </h3>
              <p>
                <span className="dot green"></span>
                <span className="dot black"></span>
                <span className="dot red"></span>
              </p>
              <p className="product__description">
                <strong>Description: </strong>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem nostrum in quis ab quaerat asperiores. Est dolores
                laboriosam laudantium, neque minus temporibus exercitationem
                maiores harum!
              </p>
              <p  className="product__description">
                {product.description}
              </p>
              <h4 key={paramId} className="product__category">
                <strong>Category:</strong> {product.category}
              </h4>
              <h4 className="product__price">
                <strong>Price:</strong> ${product.price}
              </h4>
              <p className="product__rating">Rating: 4.5/5</p>
              <Link
                // onClick={() => addToHandler(product)}
                href={"/cart?paramName=" + product.id}
                className="btn text-center"
              >
                <button className="hover:font-semibold">ADD TO CART</button>
              </Link>
              <Link href="/shop" className="btn text-center">
                <button className="hover:font-semibold">
                  Back To Shopping
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* {products.map((product) => {
        if (product.id === paramId) {
          return (
            <main key={paramId + 12} className="flex-center">
              <div className="main-content">
                <section className="product-details flex-center">
                  <div className="product__details-left flex-center">
                    <Link to="/product-details"> 
                    <img key={product.id + 10} src={imges} alt="Headphone" />
                    </Link>
                  </div>
                  <div className="product__details-right">
                    <h3 key={product.id + 6} className="product__name">
                      <strong>{product.title}</strong>
                    </h3>
                    <p>
                      <span className="dot green"></span>
                      <span className="dot black"></span>
                      <span className="dot red"></span>
                    </p>
                    <p className="product__description">
                      <strong>Description: </strong>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Voluptatem nostrum in quis ab quaerat asperiores. Est
                      dolores laboriosam laudantium, neque minus temporibus
                      exercitationem maiores harum!
                    </p>
                    <p key={product.id + 7} className="product__description">
                      {product.description}
                    </p>
                    <h4 key={paramId} className="product__category">
                      <strong>Category:</strong> {product.category}
                    </h4>
                    <h4 className="product__price">
                      <strong>Price:</strong> ${product.price}
                    </h4>
                    <p className="product__rating">Rating: 4.5/5</p>
                    <div
                    onClick={() => addToHandler(product)}
                      to={"/cart?paramName=" + product.id}
                      className="btn text-center"
                    >
                      <button  className="hover:font-semibold">
                        ADD TO CART
                      </button>
                    </div>
                    <Link to="/products" className="btn text-center">
                      <button className="hover:font-semibold">
                        Back To Shopping
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </main>
          );
        }
      })} */}
    </>
  );
};

export default ProductDetails;
