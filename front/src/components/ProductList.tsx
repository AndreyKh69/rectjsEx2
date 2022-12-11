import PCard from "./PCard";
import Product from "./Product";

import './ProductList.css';


export interface ProductListProps {
    products: Product[];
    checkedProducts: boolean[],
    onClickProduct: (idx: number) => void
}

export default function ProductList(props: ProductListProps) {
    return (
        <div className="products">
            {props.products.map((product, idx) =>
                <PCard
                    key={idx}
                    id={idx}
                    product={product}
                    checked={props.checkedProducts[idx]}
                    onClick={props.onClickProduct} />
            )}
        </div>
    )
}
