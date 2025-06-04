import express from "express";

const app = express();

// app.get("/", (req, res) => {
// 	res.send("Server is running!");
// });

app.get("/api/jokes", (req, res) => {
	res.json([
		{
			id: 1,
			joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
		},
		{
			id: 2,
			joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
		},
		{
			id: 3,
			joke: "Why don't skeletons fight each other? They don't have the guts.",
		},
	]);
});

app.get("/api/products", (req, res) => {
	const products = [
		{
			id: 1,
			name: "Laptop",
			price: 999.99,
		},
		{
			id: 2,
			name: "Smartphone",
			price: 499.99,
		},
		{
			id: 3,
			name: "Tablet",
			price: 299.99,
		},
		{
			id: 4,
			name: "Smartwatch",
			price: 199.99,
		},
		{
			id: 5,
			name: "Headphones",
			price: 89.99,
		},
	];

	if (req.query.search) {
		const filteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(req.query.search.toLowerCase())
		);
		return res.json(filteredProducts);
	}

	setTimeout(() => {
		res.json(products);
	}, 3000);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
