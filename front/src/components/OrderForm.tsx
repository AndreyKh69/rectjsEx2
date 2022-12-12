import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Api from "../api/constant.json";

export default function OrderForm(props: any) {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  let navigate = useNavigate();

  const nameFirstNameHandler = (event: any) => {
    setFirstName(event.target.value);
  };

  const nameLastNameHandler = (event: any) => {
    setLastName(event.target.value);
  };

  const nameEmailHandler = (event: any) => {
    setEmail(event.target.value);
  };

  const phoneNumberHandler = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const addressHandler = (event: any) => {
    setAddress(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    setAmount((prev) => prev + 1);

    const orderData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      products: props.products,
      totalAmount: amount,
    };

    console.log(orderData);

    fetch(Api.url + `/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.orderId);
        navigate("/order/" + data.orderId);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={firstName}
          type="string"
          placeholder="Enter First Name"
          onChange={(e) => nameFirstNameHandler(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={lastName}
          type="string"
          placeholder="Enter Last Name"
          onChange={(e) => nameLastNameHandler(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          type="string"
          placeholder="Enter Email"
          onChange={(e) => nameEmailHandler(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>PhoneNumber</Form.Label>
        <Form.Control
          value={phoneNumber}
          type="string"
          placeholder="Enter PhoneNumber"
          onChange={(e) => phoneNumberHandler(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Address</Form.Label>
        <Form.Control
          value={address}
          type="string"
          placeholder="Enter Address"
          onChange={(e) => addressHandler(e)}
        />
      </Form.Group>

      <Button onClick={(e) => submitHandler(e)} variant="primary">
        Submit
      </Button>
    </Form>
  );
}
