import { client } from "../db.js";
import express from "express";

const geoNotesDatabase = client.db("geonotes");
const createRouter = express.Router();

// Create User Collection
// { "username": "string", "email": "string", "password_hash": "string", "categories": {"id": "string", "name": "string", "color": "string", "created_at": "date"} }
async function createUserCollection() {
	try {
		console.log("Creating user collection");
		await geoNotesDatabase.createCollection("users", {
			validator: {
				$jsonSchema: {
					bsonType: "object",
					required: ["userName", "email", "password_hash", "created_at"],
					properties: {
						userName: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						email: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						password_hash: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						categories: {
							bsonType: "array",
							minItems: 0,
							maxItems: 50,
							uniqueItems: true,
							items: {
								bsonType: "object",
								required: ["id", "name", "color", "created_at"],
								properties: {
									id: {
										bsonType: "objectId",
										description: "must be an objectId and is required",
									},
									name: {
										bsonType: "string",
										description: "must be a string and is required",
									},
									color: {
										bsonType: "string",
										description: "must be a string and is required",
									},
									created_at: {
										bsonType: "date",
										description: "must be a date and is required",
									},
								},
							},
						},
						created_at: {
							bsonType: "date",
							description: "must be a date and is required",
						},
					},
				},
			},
			validationLevel: "moderate",
			validationAction: "error",
		});

		console.log("User collection created");
	} catch (err) {
		console.error("Error creating user collection: ", err);
		throw err; // Re-throw the error after logging
	}
}

async function createNotesCollection() {
	try {
		console.log("Creating notes collection");
		await geoNotesDatabase.createCollection("notes", {
			validator: {
				$jsonSchema: {
					bsonType: "object",
					required: [
						"userId",
						"title",
						"description",
						"is_public",
						"location",
						"categories",
						"created_at",
					],
					properties: {
						userId: {
							bsonType: "objectId",
							description: "must be an objectId and is required",
						},
						title: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						description: {
							bsonType: "string",
							description: "must be a string and is required",
						},
						is_public: {
							bsonType: "bool",
							description: "must be a boolean and is required",
						},
						location: {
							bsonType: "object",
							required: ["type", "coordinates"],
							properties: {
								type: {
									bsonType: "string",
									enum: ["Point"],
								},
								coordinates: {
									bsonType: "array",
									minItems: 2,
									maxItems: 2,
									items: [
										{
											bsonType: "double",
											minimum: -180,
											maximum: 180,
										},
										{
											bsonType: "double",
											minimum: -90,
											maximum: 90,
										},
									],
								},
							},
						},
						categories: {
							bsonType: "array",
							minItems: 0,
							maxItems: 50,
							uniqueItems: true,
							items: {
								bsonType: "object",
								required: ["id", "name", "color", "created_at"],
								properties: {
									id: {
										bsonType: "objectId",
										description: "must be an objectId and is required",
									},
									name: {
										bsonType: "string",
										description: "must be a string and is required",
									},
									color: {
										bsonType: "string",
										description: "must be a string and is required",
									},
									created_at: {
										bsonType: "date",
										description: "must be a date and is required",
									},
								},
							},
						},
						reported_by: {
							bsonType: "array",
							minItems: 0,
							maxItems: 50,
							uniqueItems: true,
							items: {
								bsonType: "object",
								description: "must be an object",
								properties: {
									uid: {
										bsonType: "objectId",
										description: "must be an objectId and is required",
									},
									reported_on: {
										bsonType: "date",
										description: "must be a date and is required",
									},
								},
							},
						},
						liked_by: {
							bsonType: "array",
							minItems: 0,
							uniqueItems: true,
							items: {
								bsonType: "object",
								description: "must be an object",
								properties: {
									uid: {
										bsonType: "objectId",
										description: "must be an objectId and is required",
									},
									liked_on: {
										bsonType: "date",
										description: "must be a date and is required",
									},
								},
							},
						},
						created_at: {
							bsonType: "date",
							description: "must be a date and is required",
						},
					},
				},
			},
			validationLevel: "moderate",
			validationAction: "error",
		});
	} catch (err) {
		console.error("Error creating notes collection: ", err);
		throw err; // Re-throw the error after logging
	}
}

createRouter.get("/createCollections", async (req, res) => {
	try {
		console.log("createCollections");
		// await createUserCollection();
		await createNotesCollection();
		await res.status(200).send("Collections created");
	} catch (err) {
		console.error("Error creating collections: ", err);
		res.status(500).send("Error creating collections");
	}
});

export default createRouter;
