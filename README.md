# 📦 Equipment Tracker – Full Stack Web Application

A full-stack web application to manage and track equipment.  
Users can **add, view, edit, and delete equipment records** through a clean UI backed by REST APIs.

---

## 🚀 Features

- Add new equipment
- View equipment in a table
- Edit existing equipment
- Delete equipment
- Persistent data storage
- Interactive UI with modern styling

## 🛠 Tech Stack

### Frontend
- React (Create React App)
- JavaScript, HTML, CSS

### Backend
- Node.js
- Express.js

### Database
- SQLite (file-based database)

--------------------------------------

how to run:

1.Open a terminal 1
and run these code 

          cd backend
          node server.js



2.Now open another terminal and run the below code

            cd frontend
            npm start


there will be a beb page opening now .

----------------------------------------------

## Assumptions Made

- User authentication and authorization are not required for this application.
- The application is intended for local, single-user usage.
- SQLite is used as the database to avoid the need for external database setup.
- Basic UI styling is sufficient to demonstrate functionality.
- Data validation is handled at the frontend form level.
- No deployment or production configuration is required.

---

## What I Would Improve With More Time

- Add search and filter functionality to easily find equipment.
- Implement sorting and pagination for large equipment lists.
- Improve mobile responsiveness and accessibility.
- Add confirmation dialogs before deleting records.
- Implement user authentication and role-based access control.
- Add unit and integration tests for frontend and backend.
- Improve error handling and user-friendly error messages.



-------------------------------------------------


equipment-tracker/
│
├── backend/                     # Backend (Node.js + Express)
│   │
│   ├── routes/                  # API route definitions
│   │   └── equipment.routes.js
│   │
│   ├── db.js                    # SQLite DB connection & table creation
│   ├── server.js                # Express server entry point
│   ├── equipment.db             # SQLite database file (auto-created)
│   ├── package.json             # Backend dependencies & scripts
│   └── package-lock.json
│
├── frontend/                    # Frontend (React)
│   │
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   │
│   │   ├── components/          # Reusable UI components
│   │   │   ├── EquipmentForm.js
│   │   │   └── EquipmentTable.js
│   │   │
│   │   ├── services/            # API communication layer
│   │   │   └── api.js
│   │   │
│   │   ├── App.js               # Main React component
│   │   ├── App.css              # Global styling & layout
│   │   └── index.js             # React entry point
│   │
│   ├── package.json             # Frontend dependencies & scripts
│   └── package-lock.json
│
├── .vscode/                     # VS Code configuration (optional)
│   ├── tasks.json               # Run frontend & backend from VS Code
│   └── launch.json              # Debug backend from VS Code
│
├── .gitignore                   # Ignore node_modules, DB, logs
└── README.md                    # Project documentation
