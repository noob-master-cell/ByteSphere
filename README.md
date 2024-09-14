# ByteSphere

[![Live Website](https://img.shields.io/badge/Live%20Website-Visit%20Now-blue)](https://bytesphere-7v70.onrender.com/)

ByteSphere is a responsive tech blog platform that features adaptive light/dark modes, user authentication via Google OAuth, an admin panel, and a comprehensive analytics dashboard. The platform allows admins to manage their profiles, create, edit, and delete posts, and engage with content through voting.

## Sample

[![Preview Video](https://img.shields.io/badge/Watch%20Video-Click%20Here-red)](https://drive.google.com/file/d/1Nkzgd1pWeHYHgwmISNmNVhHs9pVTqw6s/view?usp=drive_link)

Check out a brief walkthrough of ByteSphere to see it in action!

## Features

- **Responsive Design**: The platform is fully responsive with adaptive light/dark modes.
- **User Authentication**: Secure login and signup using Google OAuth, with JWT for access control.
- **Admin Panel**: Admins can create, edit, and delete blog posts with automated unique URLs and pagination.
- **User Dashboard**: Real-time user dashboard for monitoring user metrics, post analytics, and upvote/downvote trends.
- **Profile Management**: Users can update their avatar, username, email, and password, with images stored in Firebase Storage.
- **Voting System**: Users can upvote or downvote posts, with vote counts displayed in real-time.

## Tech Stack

- **Frontend**: [![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/) [![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white)](https://redux.js.org/) [![Flowbite-React](https://img.shields.io/badge/-Flowbite--React-0d6efd?logo=flowbite&logoColor=white)](https://flowbite-react.com/) [![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- **Backend**: [![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/) [![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
- **Authentication**: [![Firebase](https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
- **Storage**: [![Firebase Storage](https://img.shields.io/badge/-Firebase_Storage-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
- **Deployment**: [![Render](https://img.shields.io/badge/-Render-0468d7?logo=render&logoColor=white)](https://render.com/)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/noob-master-cell/ByteSphere.git
    cd ByteSphere
    ```

2. Install the dependencies for both the client and server:
    ```sh
    cd client
    npm install
    cd ../api
    npm install
    ```

3. Create a `.env` file in the root directory of both the client and server and add the following variables:

    **Client**:
    ```env
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    ```

    **Server**:
    ```env
    MONGO=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development server for both the client and server:
    ```sh
    cd client
    npm run dev
    cd ../api
    npm start
    ```

## Usage

- Access the client at `http://localhost:5173`
- The server runs on `http://localhost:3000`

## Deployment

The application is deployed on Render. Ensure you configure environment variables correctly on Render for both the client and server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/)
- [Render](https://render.com/)
