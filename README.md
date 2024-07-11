# ECOR-CMS
This project is a Complaint Management System (CMS) designed for the East Coast Railway Department during my internship period. The system allows users to submit complaints, view the status of their complaints, and for admins to manage and resolve these complaints.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Submit complaints with file uploads
- View complaints submitted by the user
- Admin dashboard to view and manage complaints
- Forward complaints to specific admins
- Add remarks to complaints
- Delete complaints
- Dynamic fetching of admin names

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** HTML, CSS, JavaScript
- **File Uploads:** Multer
- **Authentication:** bcrypt, express-session

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/complaint-management-system.git
    cd complaint-management-system
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up MongoDB:**

    Ensure you have MongoDB installed and running on your machine. Create a database named `main server` and a collection named `complaints`.

4. **Configure environment variables:**

    Create a `.env` file in the root directory and add your environment variables:

    ```plaintext
    PORT=3000
    SESSION_SECRET=your-secret-key
    ```

5. **Run the server:**

    ```bash
    npm start
    ```

6. **Open your browser and navigate to:**

    ```plaintext
    http://localhost:3000
    ```

## Usage

- **Submit a complaint:**
  Fill out the complaint form and submit it. You will receive a complaint ID for future references.

- **View complaints:**
  Log in with your credentials to view the complaints you have submitted.

- **Admin management:**
  Admins can log in to view all complaints, forward them to other admins, add remarks, and close complaints.

## API Endpoints

- **GET /users:** Fetch all users with `usertype` as 'User'.
- **POST /complaints:** Submit a new complaint.
- **GET /all-complaints:** Fetch all complaints.
- **GET /complaints:** Fetch complaints by employee number.
- **GET /complaint:** Fetch complaint details by complaint number or employee number.
- **GET /complaints/:complaintNo/remarks:** Fetch remarks for a specific complaint.
- **POST /complaints/:complaintNo/remarks:** Add a new remark for a specific complaint.
- **GET /admins:** Fetch admin users.

## Project Structure

```
complaint-management-system/
├── public/
│   ├── home.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   └── ...
├── routes/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── complaint.js
│   ├── counter.js
│   └── remarks.js
├── db/
│   └── connect.js
├── uploads/
├── .env
├── index.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
