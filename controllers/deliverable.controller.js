import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const news_api_key = process.env.NEWSAPIKEY;

export const getNews = async (req, res) => {
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
};

//create some dummy data for the graph
const forestCoverTrend = [
    { year: 2000, cover: 85 },
    { year: 2005, cover: 80 },
    { year: 2010, cover: 75 },
    { year: 2015, cover: 72 },
    { year: 2020, cover: 68 },
    { year: 2024, cover: 65 }
  ];

export const getGraph = (req, res) => {
    res.json(forestCoverTrend)
};