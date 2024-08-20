import express from "express";
import cors from "cors";
import readRouter from "./routers/readRouter.mjs";
import createRouter from "./routers/createRouter.mjs";
import deleteRouter from "./routers/deleteRouter.mjs";
import updateRouter from "./routers/updateRouter.mjs";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send({ message: "Hello, Express! " });
});

app.use("/read", readRouter);
app.use("/create", createRouter);
app.use("/delete", deleteRouter);
app.use("/update", updateRouter);

app.listen(5000, "0.0.0.0", () => console.log("Server running on port 5000"));