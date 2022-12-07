import { useEffect } from "react";
import { SkeletonProduct } from "../../components/SkeletonProduct";

export default function ProductList() {
  useEffect(() => {
    document.title = "Product List";

    //get the products from the API
    fetch("http://localhost:3000/getProduct")
      .then((response) => response.json())
      .then((json) => console.log(json));
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
        <div className="product">
          <img
            src="https://st.depositphotos.com/1927453/2769/i/600/depositphotos_27698015-stock-photo-bathroom.jpg"
            alt="Product"
          />
          <button>
            <i className="fa-solid fa-heart"></i>
          </button>
          <p className="productName">Treasures Bronze Emperador</p>
          <p className="productPrice">
            £32.00 / m<sup>2</sup>
          </p>
        </div>
        <SkeletonProduct />
        <div className="product">
          <img
            src="https://st.depositphotos.com/1927453/2769/i/600/depositphotos_27698015-stock-photo-bathroom.jpg"
            alt="Product"
          />
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
          <p className="productName">Treasures Bronze Emperador</p>
          <small className="productPrice">
            £32.00 / m<sup>2</sup>
          </small>
        </div>
        <div className="product">
          <img
            src="https://st.depositphotos.com/1927453/2769/i/600/depositphotos_27698015-stock-photo-bathroom.jpg"
            alt="Product"
          />
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
          <p className="productName">Treasures Bronze Emperador</p>
          <small className="productPrice">
            £32.00 / m<sup>2</sup>
          </small>
        </div>
        <div className="product">
          <img
            src="https://st.depositphotos.com/1927453/2769/i/600/depositphotos_27698015-stock-photo-bathroom.jpg"
            alt="Product"
          />
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
          <p className="productName">Treasures Bronze Emperador</p>
          <small className="productPrice">
            £32.00 / m<sup>2</sup>
          </small>
        </div>
        <div className="product">
          <img
            src="https://st.depositphotos.com/1927453/2769/i/600/depositphotos_27698015-stock-photo-bathroom.jpg"
            alt="Product"
          />
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
          <p className="productName">Treasures Bronze Emperador</p>
          <small className="productPrice">
            £32.00 / m<sup>2</sup>
          </small>
        </div>
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
