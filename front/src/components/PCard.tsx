import { Card, Col, Form } from "react-bootstrap";
import Product from "./Product";

import "./PCard.css";

export interface PCardProps {
    id: number;
    product: Product;
    onClick: (inx: number) => void;
    checked: boolean;
}

export default function PCard(props: PCardProps) {
    return (
        <Card className="card">
            <Card.Body>
                <Card.Title>{props.product.name} <Card.Img variant="right" src={props.product.img} className={"card-img"} />  price: {props.product.price}$
                </Card.Title>
                <Card.Text>
                    {props.product.description}
                </Card.Text>
            </Card.Body>
            <Form.Check
                onClick={() => props.onClick(props.id)}
                checked={props.checked}
                inline
                name={props.product.name}
                type={'checkbox'}
                id={`checkbox1`}
            />
        </Card>
    )
}