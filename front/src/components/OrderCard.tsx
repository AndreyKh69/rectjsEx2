import { Card } from "react-bootstrap";
import PCard, { PCardProps } from "./PCard";

export default function OrderCard(props: PCardProps) {
    return (
        <Card>
            <PCard id={props.id} product={props.product} />
        </Card>
    );
}