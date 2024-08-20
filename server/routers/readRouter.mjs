import { ObjectId } from "mongodb";
import { client } from "../db.js";
import express from "express";

const geoNotesDatabase = client.db("geonotes");
const readRouter = express.Router();

async function getAllNotesFromUser(user_id) {
	try {
		const userNotes = await geoNotesDatabase
			.collection("notes")
			.find({ userId: ObjectId.createFromHexString(user_id) })
			.toArray();

		console.log(userNotes);
		return userNotes;
	} catch (err) {
		console.error(err);
		throw err;
	}
}

readRouter.get("/findInCollections", async (req, res) => {
	try {
		console.log("findInCollections");
		const result = await getAllNotesFromUser("64dfc9b83d50a97d1c456793");
		await res.status(200).send("Info found in collections: " + result);
	} catch (err) {
		console.error("Error finding in collections: ", err);
		res.status(500).send("Error finding in collections");
	}
});

export default readRouter;
