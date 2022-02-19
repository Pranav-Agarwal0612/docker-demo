const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.json([
		{
			name: "josh",
			age: 300,
		},
		{
			last_name: "dork",
			weight: 34567890,
		},
		{
			abcd: "liushdg",
			xyz: false,
		},
	]);
});

app.listen(port, () => {
	console.log(`Example app is listening on ${port}`);
});
