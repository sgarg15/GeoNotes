import { client } from "../db.js";
import express from "express";

const geoNotesDatabase = client.db("geonotes");
const deleteRouter = express.Router();

export default deleteRouter;
