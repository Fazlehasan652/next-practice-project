import React from "react";
import "./searchProduct.css";

const SearchProduct = () => {
  return (
    <>
      <section className="flex-space-around">
        <div className="action__sort">
          <label style={{ marginLeft: "10px" }} htmlFor="sort">
            Sort By:{" "}
          </label>
          <select
            style={{ border: "1px solid black", padding: "9px" }}
            name="sort"
            id="sort"
          >
            <option value="sold">Most sold first</option>
            <option value="rating">Most rated first</option>
            <option value="price">Cheapest first</option>
            <option value="arrival">Newest first</option>
            <option value="discount">Biggest first</option>
          </select>
        </div>

        <div className="action__search">
          <input
            style={{
              border: "1px solid black",
              marginRight: "5px",
              padding: "9px",
            }}
            type="text"
            placeholder="Search product"
          />
          <button className="btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default SearchProduct;
