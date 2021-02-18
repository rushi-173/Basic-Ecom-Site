import "./styles.css";
import { useState } from "react";

const plantsData = [
  {
    id: 1,
    name: "Mango",
    price: 100,
    dprice: 80,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-mango-tree-grown-through-seeds-plant-16969021128844_600x600.jpg"
  },
  {
    id: 2,
    name: "Neem",
    price: 100,
    dprice: 80,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-plants-neem-tree-of-uttarabhadrapada-nakshatra-pisces-or-meen-rashi-plant-16969043902604_600x600_90a4f8b9-afc8-481a-b6ce-a7f25b388196_600x600.jpg"
  },
  {
    id: 3,
    name: "Pineapple",
    price: 100,
    dprice: 80,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-pineapple-anannas-plant_600x600.jpg"
  },
  {
    id: 4,
    name: "Chickoo",
    price: 100,
    dprice: 80,
    quantity: 5,
    img:
      "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-chikoo-sapota-chiku-fruit-grafted-plant_600x600.jpg"
  }
];
export default function App() {
  const [navItem, setNavItem] = useState("store");
  const [cart, updateCart] = useState({});
  const [wishlist, updateWishlist] = useState([]);
  console.log(navItem);

  function Navbar() {
    return (
      <div className="Navbar">
        <div style={{ textAlign: "left", padding: "0rem 1rem" }}>
          <h2 style={{ fontFamily: "Montserrat" }}>Botanic Heaven</h2>
          <p style={{ fontFamily: "Lora", fontSize: "0.8rem" }}>
            A step towards better tomorrow.
          </p>
        </div>
        <div
          className="container"
          style={{ justifyContent: "space-around", width: "350px" }}
        >
          <button className="btn btn-nav" onClick={() => setNavItem("store")}>
            Store
          </button>
          <button
            className="btn btn-nav"
            onClick={() => setNavItem("wishlist")}
          >
            Wishlist
          </button>
          <button className="btn btn-nav" onClick={() => setNavItem("cart")}>
            Cart
          </button>
        </div>
      </div>
    );
  }
  function Store() {
    function Product({ plantItem }) {
      function ProductName({ name }) {
        return (
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
              fontSize: "1.2rem"
            }}
          >
            {name} Plant
          </p>
        );
      }
      function ProductPrice({ price, dprice }) {
        return (
          <p
            style={{
              fontFamily: "Lora",
              color: "#4CAF50",
              fontStyle: "none",
              fontWeight: "bold"
            }}
          >
            Rs. {dprice} Only
            <span
              className="product-price-o"
              style={{
                textDecoration: "line-through",
                color: "#757575",
                marginLeft: "1rem",
                fontSize: "0.7rem"
              }}
            >
              Rs. {price}
            </span>
          </p>
        );
      }
      function WishlistBtn() {
        if (wishlist.includes(plantItem.id)) {
          return <span>❤️</span>;
        } else {
          return <span>❤</span>;
        }
      }
      function wishlistToggle(e, pid) {
        console.log(pid);
        if (wishlist[pid] == 1) {
          console.log(pid, "present");
          updateWishlist[{ ...wishlist, pid: 0 }];
        } else {
          updateWishlist[{ ...wishlist, pid: 1 }];
        }
      }
      return (
        <div className="product-card" key={plantItem.key}>
          <img src={plantItem.img} height="200px" alt={plantItem.name} />
          <div style={{ textAlign: "left", padding: "1rem" }}>
            <ProductName name={plantItem.name} />
            <ProductPrice price={plantItem.price} dprice={plantItem.dprice} />
            <p>Only {plantItem.quantity} </p>
            <div>
              <button className="btn btn-addtocart">Add to Cart</button>
              <button
                className="btn"
                onClick={(e) => wishlistToggle(e, plantItem.id)}
                style={{ backgroundColor: "inherit" }}
              >
                <WishlistBtn />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Store container">
        {plantsData.map((plantItem) => {
          return <Product plantItem={plantItem} />;
        })}
      </div>
    );
  }
  function Wishlist() {
    return <div className="Wishlist container">wishlist</div>;
  }
  function Cart() {
    return <div className="Cart container">cart</div>;
  }
  function DisplayProducts() {
    if (navItem === "store") return <Store />;
    else if (navItem === "wishlist") return <Wishlist />;
    else return <Cart />;
  }

  return (
    <div className="App">
      <Navbar />
      <DisplayProducts />
    </div>
  );
}
