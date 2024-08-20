import express from "express";
import cors from "cors";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ message: "Hello, Express! " });
});

app.listen(5000, "0.0.0.0", () => console.log("Server running on port 5000"));