import Product from "../../components/Product";

export default interface DBProduct {
  id: string;
  name: string;
  price: number;
  desc: string;
  images: string[];
}

function convertProducts(dbProducts: DBProduct[]) {
  const products: Product[] = dbProducts.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    desc: product.desc,
    images: product.images,
  }));

  return products;
}

export { convertProducts };
