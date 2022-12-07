import noPreview from "../../assets/no-preview.jpg";
import { urlApi } from "../../utils/url/url";
export const ProductComponent = ({ product }) => {
  return (
    <div className="product">
      <img
        src={product.file === "" ? noPreview : `${urlApi}/${product.file}`}
        alt="Product"
      />
      <button>
        <i
          className={product.like ? "fa-solid fa-heart" : "fa-regular fa-heart"}
        ></i>
      </button>
      <p className="productName">{product.name}</p>
      <p className="productPrice">
        {product.price}€ / m<sup>2</sup>
      </p>
    </div>
  );
};
