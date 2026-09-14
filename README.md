# Docker Project Documentation

This project contains a full-stack application split into two main directories:
- `frontend/` — the client-side web application
- `backend/` — the server-side API and database-related logic
- `docker-compose.yml` — container orchestration for running the app stack together

The project is designed to run in Docker containers for easier setup, environment isolation, and consistency across development and deployment.

## Project Structure

```text
Docker_Mehul_Kher/
├── backend/
│   ├── Dockerfile
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── Dockerfile
│   ├── views/
│   │   ├── index.ejs
│   ├── .dockerignore
│   ├── package.json
│   ├── package-lock.json
│   └── index.js
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Frontend Folder

This folder contains frontend of application which fetches data from backend and can be accessed on port `3000`.

## Backend Folder

This folder contains python flask server which servs data to frontend via port `8000` on endpoint `"/api"`.

## Docker Compose File

The `docker-compose.yml` file defines the multi-container architecture of the project. It tells Docker how to build and run all related services together, such as the backend, frontend, and any database containers.

