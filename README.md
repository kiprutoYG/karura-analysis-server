# Karura Forest Deforestation Monitoring Dashboard – Server

This repository contains the **backend server** for the Karura Forest Deforestation Monitoring Dashboard.  
The backend serves geospatial data, analytical results, and relevant news content to the frontend client.  
It is built with **Express.js** for API routing and integrates **PostgreSQL + PostGIS** for spatial data storage and processing.

---

## Overview

The backend is responsible for:
- Providing geospatial layers such as the **latest satellite imagery** and **deforestation hotspot maps**.
- Serving forest cover statistics for visualization on the dashboard.
- Delivering news and updates related to Karura Forest conservation.
- Managing efficient spatial queries through PostGIS.

---

## API Endpoints

The backend exposes RESTful endpoints for data retrieval:

### 1. **GET `/api/map/basemap`**
- Returns the latest satellite imagery tile layer for Karura Forest.
- Data is served from a PostGIS database with tile caching for performance.

### 2. **GET `/api/map/hotspots`**
- Returns a GeoJSON layer of deforestation hotspots.
- Data is generated from geospatial analysis and stored in PostGIS.

### 3. **GET `/api/stats/forest-cover`**
- Returns forest cover change statistics.
- Data is used by the frontend Graph Card to display trends.

### 4. **GET `/api/news`**
- Returns the latest news and updates relevant to Karura Forest.

---

## Backend Architecture

The backend is designed for **performance, scalability, and geospatial efficiency**:

- **Framework:** [Express.js](https://expressjs.com/) for API routing.
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [PostGIS](https://postgis.net/) extension for spatial queries.
- **Tile Serving:** Uses tile rendering libraries to serve raster/vector tiles from the database.
- **Data Processing:** Geospatial datasets are preprocessed before being served to the frontend.
- **Security:** CORS enabled for controlled frontend access.

---

## Technologies Used

- **Express.js** – Web framework for API endpoints
- **PostgreSQL** – Relational database for data storage
- **PostGIS** – Spatial extension for advanced geospatial queries
- **Node.js** – Backend runtime
- **GeoServer / pg_tileserv** (optional) – For serving map tiles efficiently

---

## Project Importance

Karura Forest is an urban biodiversity hotspot under threat from human activities. The backend enables:
- **Real-time access** to updated forest monitoring data.
- **Efficient geospatial processing** for hotspot detection.
- **Reliable data delivery** to the dashboard for decision-making and awareness.

---

## Getting Started

### Prerequisites
- Node.js >= 18
- PostgreSQL with PostGIS installed

### Installation
```bash
git clone https://github.com/kiprutoYG/karura-dashboard-server.git
cd karura-dashboard-server
npm install
```
