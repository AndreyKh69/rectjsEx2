// import products from "./Productstemp";
import { convertProducts } from "./converters/ProductConverter";

import Api from "./constant.json";

//localhost:8888/products

http: async function getProducts() {
  let productsRaw = await fetch(Api.url + "/products");

  console.log(productsRaw);
  let productsString = await productsRaw.json();
  let products = JSON.stringify(productsString);
  return convertProducts(productsString);
}

export { getProducts };
