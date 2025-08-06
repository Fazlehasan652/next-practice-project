import React from 'react';
import Link from 'next/link';
import "./Cart.css"
import CartItem from '../components/CartItem/CartItem';



const Cart = () => {
   
    return (
        <main>
      <div className="cart flex-center">
        <div className="cart__items">
          <div className="cart__items-heading card">
            <h2>
              Shopping Cart{" "}
              <span>
                {/* {cart.length <= 1
                  ? `${cart.length} item`
                  : `${cart.length} items`} */}
              </span>
            </h2>
            <div className="cart__items-action">
              <button
                
                className="removebtn text-center hover:font-semibold hover:text-amber-50 rounded"
              >
                Remove all items
              </button>
              <Link href="/shop" className="btn text-center">
                <button className="hover:font-semibold hover:text-amber-50 rounded">
                  Shop More
                </button>
              </Link>
            </div>
          </div>

          <CartItem  />
          {/* Product CartItem start  */}
          {/* {cart?.map((item) => (
            <CartItem item={item} key={item.id} />
          ))} */}
        </div>
        <div className="cart__payment">
          <div className="cart__payment-summary card">
            <h2>Payment Summary</h2>
            <div>
              <p>Sub Total:</p>
              <p>
                🎲
                {/* {quantityItem <= 1
                  ? ` ${quantityItem} item`
                  : `${quantityItem} items`} */}
                {/* <span>Item(s)</span> */}
              </p>
            </div>
            <div>
              <p>Shipping Cost:</p>
              <p>$ 00.00</p>
            </div>
            <div>
              <p>Total Price:</p>
              <p>
                $
                {/* {cart.reduce(
                  (total, product) =>
                    total + product?.price * product?.quantity,
                  0
                )} */}
              </p>
            </div>
            <button className="btn cart__payment-btn">Pay Now</button>
          </div>
          <div className="cart__payment-methods card">
            <h2>Payment Methods</h2>
            <div>
              <i className="fa-brands fa-cc-visa fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-apple-pay fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-amex fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-amazon-pay fa-3x hover:bg-green-500 hover:rounded"></i>
              <i className="fa-brands fa-cc-paypal fa-3x hover:bg-green-500 hover:rounded"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
};

export default Cart;