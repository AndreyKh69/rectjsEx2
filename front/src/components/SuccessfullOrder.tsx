import { useParams } from "react-router-dom";

export default function SuccessfullOrder() {
    let { id } = useParams();

    return (
        <p>
            Order number {id} is successfull
        </p>
    )
}