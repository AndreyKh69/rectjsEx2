import products from "./Productstemp";
import { convertProducts } from "./converters/ProductConverter";

function getProducts() {
    return convertProducts(products);
}

export { getProducts };