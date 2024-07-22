# ByteSphere

ByteSphere is a responsive tech blog platform that features adaptive light/dark modes, user authentication via Google OAuth, an admin panel, and a comprehensive analytics dashboard. The platform allows users to manage their profiles, create, edit, and delete posts, and engage with content through comments and voting.

## Features

- **Responsive Design**: The platform is fully responsive with adaptive light/dark modes.
- **User Authentication**: Secure login and signup using Google OAuth, with JWT for access control.
- **Admin Panel**: Admins can create, edit, and delete blog posts with automated unique URLs and pagination.
- **User Dashboard**: Real-time user dashboard for monitoring user metrics, post analytics, and upvote/downvote trends.
- **Profile Management**: Users can update their avatar, username, email, and password, with images stored in Firebase Storage.
- **Voting System**: Users can upvote or downvote posts, with vote counts displayed in real-time.

## Tech Stack

- **Frontend**: React.js, Redux, Flowbite-React, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication, Firebase OAuth
- **Storage**: Firebase Storage
- **Deployment**: Render

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ByteSphere.git
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
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_firebase_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
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

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Firebase](https://firebase.google.com/)
- [Render](https://render.com/)
