import express from "express";
import { getGraph, getNews } from "../controllers/deliverable.controller.js";


const router = express.Router();

//create a new get news endpoint
router.get("/news", getNews);

//create a new get graph endpoint

router.get("/graph", getGraph);



export default router;