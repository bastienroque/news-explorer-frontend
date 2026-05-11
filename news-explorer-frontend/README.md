# News Explorer

News Explorer is a React-based web application that allows users to search for news articles using the NewsAPI service, save articles to a personal collection, and manage authentication through protected routes.

This project was developed as part of the TripleTen Brasil Web Development program.

---

# Features

- Search news articles by keyword
- User authentication and authorization
- Protected routes for authenticated users
- Save and remove articles from a personal collection
- Responsive UI design
- Form validation and error feedback
- Persistent login sessions

---

# Stack

## Frontend

- React
- React Router DOM
- Vite

## API

- NewsAPI

## Form Handling & Validation

- Custom validation logic

---

# Add Environment Variables Section

Create a `.env` file in the root directory (news-explorer-frontend) and add:
VITE_NEWS_API_KEY=your_api_key (available at https://newsapi.org/)

---

# Project Structure

src/
├── assets/
├── components/
├── contexts/
├── hooks/
└── utils/

---

# Future Improvements

- To be determined

---

# Architecture

The application uses a component-based architecture with React Context for global state management and protected routing for authenticated pages.

---

# Author

Developed by Bastien Roque

---

# Link to the repository

https://github.com/bastienroque/news-explorer-frontend
