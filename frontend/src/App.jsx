import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import useCustomReactQuery from "./hooks/useCustomReactQuery";

function App() {
	// const [jokes, setJokes] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get("/api/jokes")
	// 		.then((response) => {
	// 			setJokes(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching jokes:", error);
	// 		});
	// }, []);

	// const { products, error, loading } = useCustomReactQuery("/api/products");

	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		(async () => {
			try {
				setLoading(true);
				setError(false);
				const response = await axios.get(`/api/products?search=${search}`, {
					signal: controller.signal,
				});
				console.log(response.data);
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				if (axios.isCancel(error)) {
					console.log("Request canceled:", error.message);
					return;
				}
				setError(true);
				setLoading(false);
				console.error("Error fetching products:", error);
			}
		})();

		return () => {
			controller.abort();
		};
	}, [search]);

	// if (loading) {
	// 	return <p>Loading...</p>;
	// }

	// if (error) {
	// 	return <p>Error fetching data. Please try again later.</p>;
	// }

	return (
		<>
			<p>Connect Frontend and Backend in Javascript</p>
			{/* <p>Total jokes are: {jokes.length}</p> */}
			{/* {jokes.map((joke) => (
				<div key={joke.id}>
					<p>{joke.joke}</p>
				</div>
			))} */}
			<input
				type="text"
				placeholder="Search products..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{loading && <p>Loading products...</p>}
			{error && <p>Error fetching products. Please try again later.</p>}
			{!loading && !error && <p>Total products are: {products.length}</p>}
		</>
	);
}

export default App;
