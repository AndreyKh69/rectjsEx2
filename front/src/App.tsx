import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import { getProducts } from "./api/ProductApi";
import "./App.css";
import Product from "./components/Product";
import Shop from "./components/Shop";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/StoreNavbar";
import Order from "./components/Order";
import SuccessfullOrder from "./components/SuccessfullOrder";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [checkedProducts, setCheckedProducts] = useState<boolean[]>([]);
  // Setting up all the products
  useEffect(() => {
    fetch("http://localhost:8888/products")
      .then((res) => res.json())
      .then((json) =>
        setProducts(
          json.map((product: Product) => {
            return { ...product };
          })
        )
      );
  }, []);

  useEffect(() => {
    setCheckedProducts(Array(products.length).fill(false));
  }, [products]);

  function handleCheckProduct(inx: number) {
    setCheckedProducts((prev) => {
      let newArray = [...prev];
      newArray[inx] = !prev[inx];
      return newArray;
    });
  }

  let numberOfProductsInCart = checkedProducts.filter(
    (checkedProduct) => checkedProduct
  ).length;

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <NavDisplay
          children={
            <Shop
              products={products}
              checkedProducts={checkedProducts}
              onClickProduct={handleCheckProduct}
            />
          }
        />
      ),
    },
    {
      path: "/Order",
      element: (
        <NavDisplay
          children={
            <Order products={products} chosenProducts={checkedProducts} />
          }
        />
      ),
    },
    {
      path: "/Order/:id",
      element: <NavDisplay children={<SuccessfullOrder />} />,
    },
  ]);

  function NavDisplay(props: { children: JSX.Element }) {
    return (
      <div>
        <Navbar numberOfProducts={numberOfProductsInCart} />
        {props.children}
      </div>
    );
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
