import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Api from "../api/constant.json";


export default function OrderForm(props: any) {
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<number>();
    const [amount, setAmount] = useState<number>(0);
    let navigate = useNavigate();

    const nameChangeHandeler = (event: any) => {
        setName(event.target.value);
    };
    const idChangeHandeler = (event: any) => {
        setId(event.target.value);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();

        setAmount(prev => prev + 1);
        let orderNum = amount + (id || 0);
        
        const orderData = {
            name: name,
            id: orderNum,
            userId: id
        };

        fetch(
            Api.url + `/order/${amount + (id || 0)}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        }
        ).then((r) => navigate('/order/' + orderNum)).catch((err) => {console.log(err) 
            navigate('/order/' + orderNum)});
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} type="string" placeholder="Enter name" onChange={(e) => nameChangeHandeler(e)} />
                <Form.Text className="text-muted">
                    Nice to meet you
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicId">
                <Form.Label>Id</Form.Label>
                <Form.Control value={id} type="number" placeholder="Enter id" onChange={(e) => idChangeHandeler(e)} />
            </Form.Group>

            <Button onClick={(e) =>submitHandler(e)} variant="primary">
                Submit
            </Button>
        </Form>
    )
}