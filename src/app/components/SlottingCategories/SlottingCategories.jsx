import React from "react";
import "./SlottingCategories.css";
const SlottingCategories = () => {
  return (
    <>
      <div className="sidebar ml-5 bg-amber-100/5">
        <h1 className="text-5xl">Filter Products</h1>
        <h1 className="text-2xl font-semibold text-red-600">Clear Filters</h1>
        <section className="categories-section ">
          <h3 className="section-title">Categories</h3>
          <ul className="list">
            <li className="list__item">
              <label htmlFor="phone">
                <input type="checkbox" name="phone" id="phone" value="phone" />
                Phone
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="tablets">
                <input
                  type="checkbox"
                  name="tablets"
                  id="tablets"
                  value="tablets"
                />
                Tablets
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="televisions">
                <input
                  type="checkbox"
                  name="televisions"
                  id="televisions"
                  value="televisions"
                />
                Televisions
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="computers">
                <input
                  type="checkbox"
                  name="computers"
                  id="computers"
                  value="computers"
                />
                Computers
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="headphones">
                <input
                  type="checkbox"
                  name="headphones"
                  id="headphones"
                  value="headphones"
                />
                Headphones
              </label>
            </li>
          </ul>
        </section>

        <section className="price-section">
          <h3 className="section-title">Price Range</h3>
          <ul className="list">
            <li className="list__item">
              <label htmlFor="price1">
                <input type="radio" name="price" id="price1" value="[0,20]" />
                $0-$20
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price2">
                <input type="radio" name="price" id="price2" value="[21,50]" />
                $21-$50
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price3">
                <input type="radio" name="price" id="price3" value="[51,100]" />
                $51-$100
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price4">
                <input
                  type="radio"
                  name="price"
                  id="price4"
                  value="[101,500]"
                />
                $101-$500
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="price5">
                <input type="radio" name="price" id="price5" value="[501+]" />
                $101+
              </label>
            </li>
          </ul>
        </section>

        <section className="shipping-section">
          <h3 className="section-title">Shipping Options</h3>
          <ul className="list">
            <li className="list__item">
              <label htmlFor="free">
                <input type="radio" name="shipping" id="free" value="free" />
                Free
              </label>
            </li>
            <li className="list__item">
              <label htmlFor="paid">
                <input type="radio" name="shipping" id="paid" value="paid" />
                Paid
              </label>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default SlottingCategories;
