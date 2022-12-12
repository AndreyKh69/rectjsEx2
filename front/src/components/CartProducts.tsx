import Productstemp from "../api/Productstemp";
import OrderCard from "./OrderCard";
import Product from "./Product";

export default function CartProducts(props: {products: Product[]}) {
    return (
        <div>
            {props.products.map((product, idx) => <OrderCard key={idx} id={idx} product={product}/>)}
        </div>
    )
}