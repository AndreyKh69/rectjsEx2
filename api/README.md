# This is API

get products ->
http://localhost:8888/products

get product by id ->
http://localhost:8888/products/ID

get order ->
http://localhost:8888/order/ID

create order (post method)->
http://localhost:8888/order

Post method data (like swagger) for postman -
{
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@gmail.com",
    "phoneNumber": "123-456-1234",
    "address": "Send From PostMan",
    "products":[
        {
             "name": "Flying Wooden Bird",
             "desc": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm.",
            "price": 51.0,
            "images": [
            "https://i.dummyjson.com/data/products/27/1.jpg",
            "https://i.dummyjson.com/data/products/27/2.jpg",
            "https://i.dummyjson.com/data/products/27/3.jpg",
            "https://i.dummyjson.com/data/products/27/4.jpg",
            "https://i.dummyjson.com/data/products/27/thumbnail.webp"
            ]

        },
        {
            "name": "Flying Wooden Bird",
            "desc": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm.",
            "price": 51.0,
            "images": [
            "https://i.dummyjson.com/data/products/27/1.jpg",
            "https://i.dummyjson.com/data/products/27/2.jpg",
            "https://i.dummyjson.com/data/products/27/3.jpg",
            "https://i.dummyjson.com/data/products/27/4.jpg",
            "https://i.dummyjson.com/data/products/27/thumbnail.webp"
            ]
        }
    ],
    "totalAmount": 1448.99
}

## By default DB_URL connect to docker mongo server, for change this endpoint just create .env file and add -

`DB_URL=mongodb://localhost:27017/colmanEx2`
