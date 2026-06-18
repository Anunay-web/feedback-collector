# Feedback Collector

A full-stack feedback management application built using the MERN stack. Users can submit feedback, search feedback entries, filter feedback by date, and delete feedback with confirmation.

## Features

* Submit user feedback
* View all feedback entries
* Search feedback by name, email, or message
* Filter feedback using a date range
* Delete feedback with confirmation modal
* Responsive user interface
* RESTful API integration
* MongoDB database storage

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

```text
feedback-collector/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone "https://github.com/Anunay-web/feedback-collector.git"
cd feedback-collector
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend application:

```bash
npm run dev
```

## API Endpoints

### Create Feedback

```http
POST /api/feedback
```

### Get Feedback Entries

```http
GET /api/feedback
```

### Search Feedback

```http
GET /api/feedback?keyword=searchTerm
```

### Filter Feedback by Date

```http
GET /api/feedback?from=YYYY-MM-DD&to=YYYY-MM-DD
```

### Delete Feedback

```http
DELETE /api/feedback/:id
```

## Key Functionalities

### Feedback Submission

Users can submit feedback using a simple form containing:

* Name
* Email
* Message

### Search Functionality

Feedback entries can be searched by:

* Name
* Email
* Message

### Date Filtering

Feedback entries can be filtered using a start date and end date.

### Delete Confirmation

Before deleting a feedback entry, a confirmation modal is displayed to prevent accidental deletion.

## Future Improvements

* User authentication
* Pagination
* Feedback categories
* Export feedback data
* Dashboard analytics
* Success and error notifications

## Author

Anunay Kumar

B.Tech Computer Science & Engineering

MERN Stack Developer
