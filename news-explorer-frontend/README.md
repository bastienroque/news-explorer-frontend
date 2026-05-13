# News Explorer

News Explorer is a React-based web application that allows users to search for news articles through the NewsAPI service, save favorite articles, and manage authentication through protected routes.

This project was developed as part of the TripleTen Brasil Web Development program.

---

## Features

- Search news articles by keyword
- User authentication and authorization
- Protected routes for authenticated users
- Save and remove articles from a personal collection
- Form validation and error handling
- Responsive user interface

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM

### API

- NewsAPI

---

## Installation

Clone the repository:
git clone https://github.com/yourusername/news-explorer.git

Navigate into the project directory:
cd news-explorer-frontend

Install dependencies:
npm install

Start the development server:
npm run dev

---

## API Configuration

This project uses the NewsAPI service to fetch news articles.
To run the project locally, you need to create your own API key.

### 1. Create a NewsAPI account

Go to the official website:
https://newsapi.org/

Create an account and generate an API key.

### 2. Create a `.env` file

In the root directory of the project, create a file named:
.env

### 3. Inside the .env file, add the API Key as follows :

VITE_NEWS_API_KEY=your_api_key_here

---

## Project Structure

src/
├── components/
├── pages/
├── services/
├── contexts/
├── utils/
└── assets/

---

## Future Improvements

- To be determined

---

## Author

Developed by Bastien Roque
