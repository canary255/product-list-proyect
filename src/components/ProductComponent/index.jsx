import { setLikeDislike } from "../../api/setLikeDislike";
import noPreview from "../../assets/no-preview.jpg";
import { urlApi } from "../../utils/url/url";
export const ProductComponent = ({ product, setUpdate }) => {
  const likeDislikeButton = async (id) => {
    await setLikeDislike(id);
    setUpdate(() => {
      return true;
    });
  };

  return (
    <div className="product">
      <div className="productImage">
        <img
          src={product.file === "" ? noPreview : `${urlApi}/${product.file}`}
          alt="Product"
        />
      </div>
      <div className="productInfo">
        <p className="productName">{product.name}</p>
        <p className="productPrice">
          {product.price}€ / m<sup>2</sup>
        </p>
        <button
          onClick={() => {
            likeDislikeButton(product.id);
          }}
        >
          <i
            className={`${
              product.like ? "fa-solid" : "fa-regular"
            }  fa-heart fa-lg`}
          ></i>
        </button>
      </div>
    </div>
  );
};
