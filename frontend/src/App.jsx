import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
	const [jokes, setJokes] = useState([]);
	useEffect(() => {
		axios
			.get("/api/jokes")
			.then((response) => {
				setJokes(response.data);
			})
			.catch((error) => {
				console.error("Error fetching jokes:", error);
			});
	}, []);

	return (
		<>
			<p>Connect Frontend and Backend in Javascript</p>
			<p>Total jokes are: {jokes.length}</p>
			{jokes.map((joke) => (
				<div key={joke.id}>
					<p>{joke.joke}</p>
				</div>
			))}
		</>
	);
}

export default App;
