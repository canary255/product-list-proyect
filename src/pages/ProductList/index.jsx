import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { ProductComponent } from "../../components/ProductComponent";
import { SkeletonProduct } from "../../components/SkeletonProduct";
import useTable from "../../hooks/useTable";

export default function ProductList() {
  const url = "http://localhost:4153";
  const [products, setProducts] = useState();
  const ELEMENTS_FOR_PAGE = 6;
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(products, page, ELEMENTS_FOR_PAGE);

  useEffect(() => {
    async function getProduct() {
      //get the products from the API
      await new Promise((r) => setTimeout(r, 2000));
      const response = await fetch(`${url}/getProduct`);
      const json = await response.json();
      setProducts(() => {
        return json;
      });
      console.log(json);
    }
    document.title = "Product List";

    getProduct();
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
          slice.map((product, i) => {
            return <ProductComponent key={i} />;
          })
        )}
      </div>
      <div className="pagination">
        <Pagination range={range} slice={slice} setPage={setPage} page={page} />
      </div>
    </>
  );
}
