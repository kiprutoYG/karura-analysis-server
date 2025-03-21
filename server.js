import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import axios from "axios";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;
const news_api_key = process.env.NEWSAPIKEY; 

//news api endpoint
app.get("/news", async (req, res) => {
        try {
            const response = await axios.get("https://newsapi.org/v2/everything", {
                params: {
                    q: "karura forest",
                    apiKey: news_api_key,
                    language: "en",
                },
            });
            const articles = response.data.articles.map((article) => ({
                title: article.title,
                description: article.description,
                url: article.url,
                image: article.urlToImage,
                publishedAt: article.publishedAt,
                source: article.source.name,
            }));
            res.json(articles);
        } catch (error) {
            console.error("Error fetching news:", error.message);
            res.status(500).json({success: false, message: "Server error"})
        }
    });


//graph api endpoint
//create some dummy data for the graph
const forestCoverTrend = [
    { year: 2000, cover: 85 },
    { year: 2005, cover: 80 },
    { year: 2010, cover: 75 },
    { year: 2015, cover: 72 },
    { year: 2020, cover: 68 },
    { year: 2024, cover: 65 }
  ];

app.get("/graph", (req, res) => {
    res.json(forestCoverTrend);
})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:"  + PORT);
})