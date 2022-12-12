import products from "./Productstemp";
import { convertProducts } from "./converters/ProductConverter";

import Api from "./constant.json";

function getProducts() {
    // let productsRaw = await fetch(Api.url + "/products");
    // let productsString = await productsRaw.json();
    // let products = JSON.stringify(productsString);
    return convertProducts(products);
}

export { getProducts };