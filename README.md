# Digimon Card List App

This project is a web application built with Vite, Ant Design, and Axios. It provides a user-friendly interface to view and manage a list of Digimon cards fetched from a public API. The application utilizes the Context API for managing the authorization token including LocalStorage. It uses infinite scrolling to efficiently load card data. It is a responsive app (Tested on Xiaomi Mi 9, Samsung A54). The project uses Atomic Design as a base structure, separating logic such as services, custom hooks, context, and utilities. The app has a custom RouteGuard based on the 'token' value stored in the AuthContext, which is read using a useEffect and validated with the isAuthenticated function.

### API Usage

The app retrieves data from the Digimon public API, which lacks pagination or limit parameters. To handle the large dataset of over 3000 records efficiently, the application implements infinite scrolling, dynamically loading 50 cards per batch to enhance performance and user experience.

### Future Improvements

- **Pagination Support**: If API access is granted, pagination will be implemented to optimize data fetching and improve performance. Given the large dataset, it's worth discussing with the team whether loading all data on a single page is necessary.

- **Token Management**: Utilizes React Context API and LocalStorage for token persistence. In the future, implementing a more secure storage method like HTTP-only cookies would enhance security.

## Features

- **Responsive Design**: Built with Ant Design as the design system for a clean and modern UI.
- **Authorization Module**: Uses Context API to manage user authentication.
- **Login and Home Pages**:
  - **Login Page**: Allows users to log in to the application.
  - **Home Page**: Displays a list of Digimon cards fetched from the public API.
- **Infinite Scroll**: Loads cards in chunks of 100 to handle large datasets efficiently (2000+ records).
- **Card Details**: Each card displays its name, number, and an image.

## Technologies Used

- **Vite**: A fast build tool and development server for modern web projects.
- **Ant Design**: A design system for enterprise-level products, providing a set of high-quality React components.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Context API**: For managing global state, particularly for authorization.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:j4rek/Digimon-card-library.git
   cd Digimon-card-library

   ```

2. Install the dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Running the project

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Credentials

This app uses a mock authentication system, allowing you to log in with any valid email address and a password of at least 8 characters. For example:

- Email: example@example.com
- Password: 123asd78
