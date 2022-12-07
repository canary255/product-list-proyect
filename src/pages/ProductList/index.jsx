import { useEffect, useState } from "react";
import { ProductComponent } from "../../components/ProductComponent";
import { SkeletonProduct } from "../../components/SkeletonProduct";

export default function ProductList() {
  const url = "http://localhost:3000";
  const [products, setProducts] = useState();
  useEffect(() => {
    document.title = "Product List";

    //get the products from the API
    fetch(`${url}/getProduct`)
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <div className="searchResults">
        <p className="itemColumn itemFound">123 Items found</p>
        <h2 className="itemColumn itemName">
          Search Results for "Bathroom taps"
        </h2>
      </div>
      <div className="boxProduct">
        <select name="product">
          <option>Productos (53)</option>
        </select>
        <select name="sort">
          <option>ORDENAR POR</option>
        </select>
      </div>
      <div className="productList">
        {!products ? (
          <>
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
            <SkeletonProduct />
          </>
        ) : (
          products.map((product, i) => {
            return <ProductComponent key={i} />;
          })
        )}
      </div>
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}
