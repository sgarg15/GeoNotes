import { client } from "../db.js";
import express from "express";

const geoNotesDatabase = client.db("geonotes");
const updateRouter = express.Router();

export default updateRouter