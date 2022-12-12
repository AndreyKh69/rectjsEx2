import CartProducts from "./CartProducts";
import OrderForm from "./OrderForm";
import Product from "./Product";

import "./Order.css";
import { useMemo } from "react";

interface OrderProps {
    products: Product[];
    chosenProducts: boolean[];
}

export default function Order(props: OrderProps) {
    
    let orderedProducts: Product[] = useMemo(() => props.products.filter((product, idx) => props.chosenProducts[idx]), []);
    
    function calculatePrice() {
        return orderedProducts.reduce((acc, product) => acc + product.price, 0);
    }


    return (
        <div className="container">
            <p>Order</p>
            <OrderForm />
            <p></p>
            <p>Cart products total price: {calculatePrice()}$</p>
            <CartProducts products={orderedProducts} />
        </div>
    )
}