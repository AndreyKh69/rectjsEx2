import { Card, Form } from "react-bootstrap";
import PCard, { PCardProps } from "./PCard";

export interface ShopCardProps {
    id: PCardProps["id"];
    product: PCardProps["product"];
    onClick: (inx: number) => void;
    isChecked: boolean;
}

export default function ShopCard(props: ShopCardProps) {
    return (
        <Card>
            <PCard id={props.id} product={props.product} />
            <Form.Check
                onChange={() => props.onClick(props.id)}
                checked={props.isChecked}
                inline
                name={props.product.name}
                type={'checkbox'}
                id={`checkbox1`} />
        </Card>
    );
}
