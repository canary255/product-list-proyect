import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { ProductComponent } from "../../components/ProductComponent";
import { SkeletonProduct } from "../../components/SkeletonProduct";
import useTable from "../../hooks/useTable";
import { urlApi } from "../../utils/url/url";

export default function ProductList() {
  const [products, setProducts] = useState();
  const ELEMENTS_FOR_PAGE = 6;
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(products, page, ELEMENTS_FOR_PAGE);

  useEffect(() => {
    async function getProduct() {
      await new Promise((r) => setTimeout(r, 2000));
      const response = await fetch(`${urlApi}/getProduct`);
      const json = await response.json();
      setProducts(() => {
        return json;
      });
      console.log(json);
    }
    document.title = "Product List";

    getProduct();
  }, []);

  const addPlural = (number) => {
    return number > 1 ? "s" : "";
  };

  const letterS = addPlural(products?.length);

  return (
    <>
      <div className="searchResults">
        <h2 className="itemColumn itemName">
          {!products
            ? "Buscando elementos."
            : `${products.length} resultado${letterS} encontrado${letterS}.`}
        </h2>
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
            return <ProductComponent key={i} product={product} />;
          })
        )}
      </div>
      <div className="pagination">
        <Pagination range={range} slice={slice} setPage={setPage} page={page} />
      </div>
    </>
  );
}
