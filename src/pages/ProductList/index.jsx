import { useEffect, useState } from "react";
import { getProductById } from "../../api/getProduct";
import Pagination from "../../components/Pagination";
import { ProductComponent } from "../../components/ProductComponent";
import { SkeletonProduct } from "../../components/SkeletonProduct";
import useTable from "../../hooks/useTable";

export default function ProductList() {
  const [products, setProducts] = useState();
  const [update, setUpdate] = useState(false);
  const ELEMENTS_PER_PAGE = 6;
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(products, page, ELEMENTS_PER_PAGE);

  useEffect(() => {
    const abortController = new AbortController();
    async function getProduct() {
      if (!update) await new Promise((r) => setTimeout(r, 2000));
      const products = await getProductById(abortController.signal);
      setProducts(() => {
        return products;
      });
      setUpdate(() => {
        return false;
      });
    }

    getProduct(update);

    return () => {
      abortController.abort();
    };
  }, [update]);

  const addPlural = (number) => {
    return number !== 1 ? "s" : "";
  };

  const plural = addPlural(products?.length);

  return (
    <>
      <div className="searchResults">
        <h2 className="itemColumn itemName">
          {!products
            ? "Cargando productos..."
            : `${products.length} producto${plural} encontrado${plural}.`}
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
            return (
              <ProductComponent
                key={i}
                product={product}
                setUpdate={setUpdate}
              />
            );
          })
        )}
      </div>
      <div className="pagination">
        <Pagination range={range} slice={slice} setPage={setPage} page={page} />
      </div>
    </>
  );
}
