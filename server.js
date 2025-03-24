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
                    q: "forests in kenya",
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
    { year: 2020, cover: 9.86 },
    { year: 2023, cover: 9.92 },
    { year: 2025, cover: 10.05 }
  ];

app.get("/graph", (req, res) => {
    res.json(forestCoverTrend);
})

app.listen(PORT, () => {
    console.log("Server started at http://localhost:"  + PORT);
})