import { Card, Col } from "react-bootstrap";
import Product from "./Product";

import "./PCard.css";

export interface PCardProps {
    id: number;
    product: Product;
}

export default function PCard(props: PCardProps) {
    return (
        <Card.Body>
            <Card.Title>{props.product.name} <Card.Img variant="right" src={props.product.img} className={"card-img"} />  price: {props.product.price}$
            </Card.Title>
            <Card.Text>
                {props.product.description}
            </Card.Text>
        </Card.Body>
    )
}