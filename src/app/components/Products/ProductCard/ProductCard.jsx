import React from "react";

import "./ProductCard.css";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ data }) => {
  // console.log(data)

  return (
    <>
      {data?.products?.map((product) => (
        <article className="product card">
          {/* to={product.id}  */}
          <Link href="/productDetails" key={product?.id + 1}>
            <div className="badge">
              <span> {product?.stock} in stock</span>
              <hr className="hr-design" />
              <span>{product?.sold} sold</span>
            </div>
            <div className="product__img">
              <Image
                // className="product__img"
                src={product?.image?.secure_url}
                // width={400}
                // height={400}
                // src="/assets/Crick-jpg.jpg"
                fill={true}
                alt="Headphone"
                className="saturate-10 hover:saturate-200 hover:transition hover:duration-700 hover:ease-in-out"
              />
            </div>
          </Link>
          <div className="product__body">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                {/* Like  */}
                <div className="flex justify-center items-center gap-1.5">
                  <span>
                    <i className="bi bi-hand-thumbs-up"></i>
                    {/* <i className="bi bi-hand-thumbs-up-fill"></i> */}
                  </span>
                  <small>{product?.like} k</small>
                </div>
                {/* Love  */}
                <div className="flex justify-center items-center gap-1.5">
                  <span>
                    {/* <i class="bi bi-heart-fill"></i> */}
                    <i className="bi bi-heart"></i>
                  </span>
                  <small>{product?.love} k</small>
                </div>
                {/* yelp  */}
                <div className="flex justify-center items-center gap-1.5">
                  <span>
                    {/* <i className="bi bi-yelp text-red-600"></i> */}
                    <i className="bi bi-yelp text-green-500"></i>
                  </span>
                  <small> {product?.yelp} k</small>
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
                  <small>{product?.review}</small> <small>reviews</small>
                </div>
              </div>
            </div>
            <div>
              <h3
                key={product?.id + 3}
                className="product__name  -mt-2 mb-2 text-2xl font-semibold"
              >
                {product?.title}
              </h3>
              <p>
                <span className="dot green"></span>
                <span className="dot black"></span>
                <span className="dot red"></span>
              </p>
            </div>

            <p key={product?.id + 4} className="product__description ">
              {product?.description.slice(0, 80)}....
              {/* to={product.id}  */}
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt facilis cupiditate ut quas in earum asperiores alias
            reprehenderit, debitis atque eius accusamus architecto. */}
              <Link
                href="/productDetails"
                key={product?.id}
                className="learn-more"
              >
                Learn More
              </Link>
            </p>
            <h4 className="product__price">$ {product?.price}</h4>
            <p className="product__rating">Rating 4.5/5</p>
            <Link
              // onClick={() => dispatch(addToCart(product))}
              href={"/cart?paramName=" + product?.id}
              className="btn text-center"
            >
              <button
                // onClick={() => dispatch(addToCart(product))}
                className="hover:font-semibold"
              >
                ADD TO CART
              </button>
            </Link>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProductCard;
