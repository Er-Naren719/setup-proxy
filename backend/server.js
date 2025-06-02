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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
