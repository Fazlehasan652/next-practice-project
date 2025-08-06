import React from "react";
import "./CartItem.css";
import Link from "next/link";

const CartItem = () => {
  const product = "";
  return (
    <>
      <div>
        <div className="cart__item card flex-space-around">
          <img
            key={product.id + 8}
            src="/assets/images/headphone.jpg"
            alt="headphone"
            className="cart__item-img"
          />
          <div className="cart__item-description">
            <h3 key={product.id} className="product__name">
              {product.title}
            </h3>
            <h4 className="product__price">Price: ${product.price}</h4>
            <p className="cart__item-shipping">Free Shipping</p>
          </div>
          <div className="cart__item-actions">
            <p>Quantity</p>
            <div className="cart__item-trash">
              <button
                // onClick={() => {
                //   dispatch(
                //     modifyQuantityOfAnItem({
                //       id: product.id,
                //       quantity: itemQuantity + 1,
                //     })
                //   );
                //   setItemQuantity(itemQuantity + 1);
                // }}
                className="bg-gray-200 w-10"
              >
                <i className="fas fa-add"></i>
              </button>
              {/* <span>{product.quantity}</span> */}
              <input
                className="w-7 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                // value={itemQuantity}
                min="1"
                // onChange={(event) => {
                //   console.log(typeof event.target.value);

                //   dispatch(
                //     modifyQuantityOfAnItem({
                //       id: item.id,
                //       quantity: Number(event.target.value),
                //     })
                //   );
                //   setItemQuantity(Number(event.target.value));
                // }}
              />
              <button
                // onClick={() => {
                //   if (itemQuantity > 1) {
                //     dispatch(
                //       modifyQuantityOfAnItem({
                //         id: product.id,
                //         quantity: itemQuantity - 1,
                //       })
                //     );
                //     setItemQuantity(itemQuantity - 1);
                //   } else {
                //     alert(`Quantity should not be less than 1`);
                //   }
                // }}
                className="bg-gray-200 w-10"
              >
                <i className="fas fa-minus"></i>
              </button>
            </div>
          </div>
          <div className="cart__item-actions">
            <p>Sub Total</p>
            <p>${product.quantity * product.price}</p>
          </div>
          <button
            // onClick={() => dispatch(removeItemFromCart(product.id))}
            className="removebtn hover:font-semibold hover:text-amber-50 rounded"
          >
            Remove
          </button>
        </div>
      </div>

      {product?.id ? (
        // <div className="cart__item card flex-space-around">
        //   <img
        //     key={product.id + 8}
        //     src={product.image}
        //     alt="headphone"
        //     className="cart__item-img"
        //   />
        //   <div className="cart__item-description">
        //     <h3 key={product.id} className="product__name">
        //       {product.title}
        //     </h3>
        //     <h4 className="product__price">Price: ${product.price}</h4>
        //     <p className="cart__item-shipping">Free Shipping</p>
        //   </div>
        //   <div className="cart__item-actions">
        //     <p>Quantity</p>
        //     <div className="cart__item-trash">
        //       <button
        //         // onClick={() => {
        //         //   dispatch(
        //         //     modifyQuantityOfAnItem({
        //         //       id: product.id,
        //         //       quantity: itemQuantity + 1,
        //         //     })
        //         //   );
        //         //   setItemQuantity(itemQuantity + 1);
        //         // }}
        //         className="bg-gray-200 w-10"
        //       >
        //         <i className="fas fa-add"></i>
        //       </button>
        //       {/* <span>{product.quantity}</span> */}
        //       <input
        //         className="w-7 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        //         type="number"
        //         // value={itemQuantity}
        //         min="1"
        //         // onChange={(event) => {
        //         //   console.log(typeof event.target.value);

        //         //   dispatch(
        //         //     modifyQuantityOfAnItem({
        //         //       id: item.id,
        //         //       quantity: Number(event.target.value),
        //         //     })
        //         //   );
        //         //   setItemQuantity(Number(event.target.value));
        //         // }}
        //       />
        //       <button
        //         // onClick={() => {
        //         //   if (itemQuantity > 1) {
        //         //     dispatch(
        //         //       modifyQuantityOfAnItem({
        //         //         id: product.id,
        //         //         quantity: itemQuantity - 1,
        //         //       })
        //         //     );
        //         //     setItemQuantity(itemQuantity - 1);
        //         //   } else {
        //         //     alert(`Quantity should not be less than 1`);
        //         //   }
        //         // }}
        //         className="bg-gray-200 w-10"
        //       >
        //         <i className="fas fa-minus"></i>
        //       </button>
        //     </div>
        //   </div>
        //   <div className="cart__item-actions">
        //     <p>Sub Total</p>
        //     <p>${product.quantity * product.price}</p>
        //   </div>
        //   <button
        //     // onClick={() => dispatch(removeItemFromCart(product.id))}
        //     className="removebtn hover:font-semibold hover:text-amber-50 rounded"
        //   >
        //     Remove
        //   </button>
        // </div>
        <h1></h1>
      ) : (
        <div className="bg-gray-50 shadow text-red-600">
          Your Cart is empty{" "}
          <Link href="/shop">
            <span className="text-blue-600">Go Back</span>
          </Link>{" "}
        </div>
      )}
    </>
  );
};

export default CartItem;
