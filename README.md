# Image Search App

## Overview

The **Image Search App** is a dynamic web application that allows users to search for and display high-resolution images from the Unsplash API. The app is designed with a responsive interface, making it accessible and user-friendly across various devices, including mobile phones and tablets.

## Features

- **Search Functionality:** Users can search for images by entering keywords.
- **Responsive Design:** The app is optimized for different screen sizes, ensuring usability on desktops, tablets, and mobile devices.
- **Image Display:** Images are displayed in a grid format, allowing users to browse through the search results easily.
- **View and Download:** Users can view full-sized images in a new tab and download images directly from the app.

## Technologies Used

- **HTML:** Structure of the web application.
- **CSS:** Styling and layout of the app, ensuring a responsive design.
- **JavaScript:** Handles the dynamic interaction with the Unsplash API and updates the DOM based on user input.

## How It Works

### Unsplash API Integration

The app is powered by the Unsplash API, which provides access to a vast collection of high-quality, royalty-free images.

1. **API Key:** The app uses an API key to authenticate requests to Unsplash.
2. **Search:** When a user submits a search query, the app sends a request to Unsplash's search endpoint, including the search term and pagination details.
3. **Data Handling:** The API returns a JSON response containing a list of images matching the search term. The JavaScript code then processes this data to dynamically create and insert HTML elements for each image.
4. **User Interaction:** Users can click on an image to view it in full size in a new tab or download it directly using the provided download link.

### Example Workflow

1. **User Input:** The user enters a keyword in the search bar and clicks the search button.
2. **API Request:** The app sends an HTTP request to the Unsplash API with the search term and the current page number.
3. **API Response:** The app receives a JSON response containing image data.
4. **Rendering:** The images are rendered on the page, with options to view and download each image.
