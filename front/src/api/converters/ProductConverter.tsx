import Product from "../../components/Product";

export default interface DBProduct {
    name: string;
    desc: string;
    price: number;
    images: string[];
}

function convertProducts(dbProducts: DBProduct[]) {
    const products: Product[] = dbProducts.map(product => ({
        name: product.name,
        price: product.price,
        description: product.desc,
        img: product.images[0]
    }));

    return products;
}

export { convertProducts };