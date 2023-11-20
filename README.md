# Rent Drive UA

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Rent Drive UA is a web application designed for a car rental company in Ukraine, enabling users to effortlessly browse and rent cars. The application is built with React and React Router for efficient routing, utilizing its own API based on Mockapi.io to manage advertisements, each containing essential details for user decision-making.

## Pages:

### HomePage:

The home page is intentionally minimal, featuring only a header and a motivational video to create a welcoming atmosphere for users. The header provides a warm welcome message and sets the tone for the car rental experience. A motivational video is embedded to inspire users and create a positive connection with the car rental service.

### CatalogPage:

The catalog page showcases available cars for rent, featuring a filter option for users to refine their search by brand. The initial display includes 12 advertisements, with an option to load more by clicking the "Load More" button.

### FavoritesPage:

On the favorites page, users can manage their preferred advertisements by adding or removing them from their favorites list. This list persists even after a page refresh, ensuring a personalized experience.

## Technical Details:

### Functionality:

- Users can efficiently browse and filter advertisements in the catalog.
- Users have the ability to add and remove advertisements from their favorites list.
- Detailed information about each advertisement is displayed in a modal window.
- The modal window can be closed using the "x" button, clicking outside the modal, or pressing the "Esc" key.
- Users can easily contact the car rental company via the "Rent a Car" link, which provides the company's phone number: +380730000000.

### Additional Features:

#### Filtering:

Users can refine their search by filtering advertisements based on the car brand.

#### Pagination:

The catalog page implements pagination to display a limited number of advertisements per page, enhancing user experience.

#### User Interaction:

The application provides real-time feedback to users when they add or remove advertisements from their favorites list.

#### Interface Improvement:

The interface is thoughtfully designed for visual appeal and user convenience.

## Usage:

To run the application locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install necessary dependencies.
4. Run `npm start` to start the development server.
5. Open a web browser and go to http://localhost:3000 to explore and use the application.
