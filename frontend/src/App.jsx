import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import useCustomReactQuery from "./hooks/useCustomReactQuery";

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

	const { products, error, loading } = useCustomReactQuery("/api/products");

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error fetching data. Please try again later.</p>;
	}

	return (
		<>
			<p>Connect Frontend and Backend in Javascript</p>
			{/* <p>Total jokes are: {jokes.length}</p> */}
			{/* {jokes.map((joke) => (
				<div key={joke.id}>
					<p>{joke.joke}</p>
				</div>
			))} */}
			<p>Total products are: {products.length}</p>
		</>
	);
}

export default App;
