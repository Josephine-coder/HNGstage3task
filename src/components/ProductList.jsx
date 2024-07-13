import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

// const products = {
//   dailyPick: [
//     {
//         id: 1,
//         name: "Cooperate Office Shirt",
//         price: 200,
//         quantity: 1,
//         imageUrl: "./Images/cooperateofficeshirt.jpeg",
//     },
//     {
//       id: 2,
//       name: "Light Lady's Top",
//       quantity: 1,
//       imageUrl: "./Images/ladieslighttop.jpeg",
//       price: 200,
//     },
//     {
//       id: 3,
//       name: "Pink Lady's Coat",
//       quantity: 1,
//       imageUrl: "./Images/pinkladiescoat.jpeg",
//       price: 200,
//     },
//     { id: 4,
//         name: "Sweat Jacket",
//         quantity: 1,
//         imageUrl: "./Images/sweatjacket.jpeg",
//         price: 200,
//     },
//     { id: 5, name: "Cooperate Office Shirt", quantity: 1, imageUrl: "./Images/cooperativeofficeshirt.jpeg", price: 200 },
//     { id: 6, name: "Men Jean Jacket", quantity: 1, imageUrl: "./Images/menjeanjacket.jpeg",price: 200 },
//     { id: 7, name: "Casual Shirt for Men", quantity: 1, imageUrl: "./Images/casualshirtformen.jpeg",price: 200 },
//     { id: 8, name: "Ladies Baggy Sweat Wear", quantity: 1, imageUrl: "./Images/ladiesbaggy.jpeg", price: 200 },
//   ],
//   ladiesLove: [
//     { id: 9, name: "Pink Lady's Coat", quantity: 1, imageUrl: "./Images/pinkcoat.jpeg",price: 200 },
//     { id: 10, name: "Ladies Baggy Sweat Wear", quantity: 1, imageUrl: "./Images/ladiesbaggy.jpeg",price: 200 },
//     { id: 11, name: "Black Dinner Gown", quantity: 1, imageUrl: "./Images/blackdinner.jpeg",price: 200 },
//     { id: 12, name: "Waist Belt for Ladies", quantity: 1, imageUrl: "./Images/waistbelt.jpeg",price: 200 },
//     { id: 13, name: "Knitted Top", quantity: 1, imageUrl: "./Images/knitted.jpeg",price: 200 },
//     { id: 14, name: "Jean and Sweater", quantity: 1, imageUrl: "./Images/jeanandsweater.jpeg", price: 200 },
//     { id: 15, name: "Pink Lady's Coat", quantity: 1, imageUrl: "./Images/pinkladiescoat2.jpeg", price: 200 },
//     { id: 16, name: "Light Lady's Top", quantity: 1, imageUrl: "./Images/lighttop.jpeg", price: 200 },
//   ],
//   forMen: [
//     { id: 17, name: "Men Jean Jacket", quantity: 1, imageUrl: "./Images/menjean.jpeg", price: 200 },
//     { id: 18, name: "Casual Shirt for Men", quantity: 1, imageUrl: "./Images/casual.jpeg",price: 200 },
//     { id: 19, name: "Street Fashion Wear", quantity: 1, imageUrl: "./Images/streetfash.jpeg", price: 200 },
//     { id: 20, name: "Cooperate Office Shirt", quantity: 1, imageUrl: "./Images/cooperateofficeshirt.jpeg",price: 200 },
//     { id: 21, name: "Cooperate Office Shirt", quantity: 1, imageUrl: "./Images/cooperate.jpeg", price: 200 },
//     { id: 22, name: "Casual-Cooperate Wear", quantity: 1, imageUrl: "./Images/casual-cop.jpeg", price: 200 },
//     { id: 23, name: "Sweat Shirt", quantity: 1, imageUrl: "./Images/sweatshirt.jpeg", price: 200 },
//     { id: 24, name: "Vintage Shirt", quantity: 1, imageUrl: "./Images/vintage.jpeg", price: 200 },
//   ],
// };
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //   const apiEndpoint = 'https://api.timbu.cloud/products?organization_id=88d9c1d1ecf64488931bf3f3be33d124&reverse_sort=false&page=2&size=10&Appid=8E3LRUT6KN1GPB7&Apikey=e00af33db0f64d369d1543f9de758d5720240713094425828146';
    const apiEndpoint =
      "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=88d9c1d1ecf64488931bf3f3be33d124&reverse_sort=false&page=1&size=12&Appid=8E3LRUT6KN1GPB7&Apikey=e00af33db0f64d369d1543f9de758d5720240713094425828146";

    axios
      .get(apiEndpoint)
      .then((response) => {
        setProducts(response.data.items);
        console.log(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  // function ProductList({ addToCart }) {
  //     return (
  //       <div className="product-list">
  //         <div className="product-category">
  //           <h3 className="category-title">Daily Pick</h3>
  //           <button className="seemorebtn">See More</button>
  //           <div className="product-row">
  //             {products.dailyPick.map((product) => (
  //               <Product key={product.id} product={product} addToCart={addToCart} />
  //             ))}
  //           </div>
  //         </div>
  //         <div className="product-category">
  //           <h3 className="category-title">Ladies Love</h3>
  //           <button className="seemorebtn">See More</button>
  //           <div className="product-row">
  //             {products.ladiesLove.map((product) => (
  //               <Product key={product.id} product={product} addToCart={addToCart} />
  //             ))}
  //           </div>
  //         </div>
  //         <div className="product-category">
  //           <h3 className="category-title">For Men</h3>
  //           <button className="seemorebtn">See More</button>
  //           <div className="product-row">
  //             {products.forMen.map((product) => (
  //               <Product key={product.id} product={product} addToCart={addToCart} />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     );
  //  }
  return (
    <div className="product-list">
      <h2>Daily Pick</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Ladies Love</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            {/* <img src="{`https://api.timbu.cloud/images/${item.photos[0].url}`}" /> */}
            {/* <img src="{`https://api.timbu.cloud/images/${imageUrl}`}" /> */}
            {/* <img src="{`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} alt={product.name}"/> */}
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>For Men</h2>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
