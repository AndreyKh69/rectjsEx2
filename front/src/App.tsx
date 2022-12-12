import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getProducts } from './api/ProductApi';
import './App.css';
import Product from './components/Product';
import Shop from './components/Shop';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/StoreNavbar";
import Order from './components/Order';

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const [checkedProducts, setCheckedProducts] = useState<boolean[]>([]);
	useEffect(() => {
		setProducts(getProducts());
	}, [])

	useEffect(() => {
		setCheckedProducts(Array(products.length).fill(false));
	}, [products])

	function handleCheckProduct(inx: number) {
		setCheckedProducts((prev) => {
			let newArray = [...prev];
			newArray[inx] = !prev[inx];
			return newArray;
		})
	}


	let numberOfProductsInCart = checkedProducts.filter(checkedProduct => checkedProduct).length;

	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavDisplay children={<Shop products={products} checkedProducts={checkedProducts} onClickProduct={handleCheckProduct} />}/>,
		},
		{
			path: "/Order",
			element: <NavDisplay children={<Order products={products} chosenProducts={checkedProducts} />}/>,
		},
	]);

	function NavDisplay(props: {children: JSX.Element}) {
		return (
			<div>
				<Navbar numberOfProducts={numberOfProductsInCart} />
				{props.children}
			</div>
		)
	}



	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
