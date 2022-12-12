import ProductList from "./ProductList";

import { ProductListProps } from "./ProductList";

export default function Shop(props: ProductListProps) {
    return (
        <div>
            <p>Shop</p>
            <ProductList
                products={props.products}
                checkedProducts={props.checkedProducts}
                onClickProduct={props.onClickProduct} />
        </div>
    )
}