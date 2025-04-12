# Art Showcase Website

A modern, responsive website built entirely with JavaScript, HTML, and CSS to display my passion for art. Originally started doing art during high school to earn awards and scholarships, and now continue it as a hobby. This project is my ongoing portfolio that serves as both a personal art gallery and a testament to my beginner skills in web development.

## Table of Contents

- [Overview](#overview)
- [Technical Overview](#technical-overview)
  - [Technologies Used](#technologies-used)
  - [Architecture & Structure](#architecture--structure)
  - [Responsive Design](#responsive-design)
  - [Performance & Best Practices](#performance--best-practices)
- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)

## Overview

This personal project is a blend of art and technology. It serves as a digital gallery where I display my original pieces, and is designed to offer an immersive user experience through interactive elements and a clean aesthetic. This is also my first attempt at creating a website.

## Technical Overview

### Technologies Used

- **HTML**  
  Implements semantic structuring for better accessibility, SEO, and maintainability (in other words, using <header>, <nav>, <main>, <section>, <footer>, etc.).
  
- **CSS**  
  Begins with a robust global reset to ensure consistent styling across browsers and is then organized into clearly defined, modular sections. It leverages advanced layout techniques—such as Flexbox, CSS Grid, and precise absolute positioning combined with transforms to craft a dynamic image slider and responsive navigation system. Additionally, use of media queries ensures seamless adaptation to different screen sizes, while smooth animations and transitions enhance interactivity.

- **JavaScript**  
  Provides interactive features (e.g., dynamic sliding gallery, modals for artwork details) and event-driven behavior. Organized with modular patterns and adheres to clean coding standards to enhance readability and maintainability.

### Architecture & Structure

- **Separation of Concerns:**  
  The project is organized with a clear separation between structure (HTML), presentation (CSS), and behavior (JavaScript). This modular approach improves scalability and simplifies future updates or additions.
  
- **Directory Layout:**  
  - `/index.html`: Entry point for the website.
  - `/paintings.html and /drawings.html`: Drawing and painting portion of the website where the artwork is shown.
  - `/recommendations.html`: Users can send in art ideas/recommendations through the Google Form shown on this part of the website.
  - `/styles.css`: Contains stylesheets using CSS best practices of modular design.
  - `/app.js`: JavaScript file that manage interactions, sliding gallery behavior, and any data manipulation.
  - `/images`: Includes images of artwork and art supplies to support the art gallery presentation.
  
- **Modern JavaScript Practices:**  
  Uses event listeners, callback functions, and asynchronous programming techniques to deliver a smooth and interactive user interface.

### Responsive Design

- **Mobile-First Approach:**  
  Designed with a mobile-first mindset, the site ensures a seamless experience on various devices—from smartphones to desktops. Sliding gallery can only be seen on wider screens.
  
- **Flexible Layouts:**  
  Utilizes media queries and CSS Grid to adapt content layouts dynamically based on screen size, ensuring that the content remains engaging and accessible across devices.

### Performance & Best Practices
  
- **Clean, Commented Code:**  
  All code (HTML, CSS, and JavaScript) is commented to explain functionality and design decisions, maintaining a high standard of code quality.
  
- **Scalability:**  
  Due to previous internship and large project experience, organization was the number one priority. To keep code bases scalable it is important to use the most efficient functions, keep files where it makes most sense, and leave room for ways to add more data.

## Features

- **Dynamic Gallery:**  
  Displays artwork in an interactive, sliding gallery that enhances user engagement. When on smaller screens the artwork switches to be a simple vertical scroll as that was the most visually appealing and user-friendly way to show everything.
  
- **Smooth Animations:**  
  CSS animations provide visual feedback that enriches the user experience.
  
- **Interactive Content:**  
  JavaScript-powered modals and overlays allow users to view/exit artwork details without leaving the main page.
  

## Installation & Setup

To run this project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jafrin13/jafrinasArtWebsite.git
   cd jafrinasArtWebsite
   ```

2. **Open the Project:**

   Simply open `index.html` in your web browser to view the website.  
   For a local development server with auto-reloading, you can use VS Code’s Live Server extension or a simple HTTP server:

   ```bash
   # Using Python's built-in server
   python3 -m http.server 8000
   ```

3. **Explore & Modify:**

   The project is structured to allow for easy customization and expansion. Update the content, styles, or scripts as needed.

## Usage

This website is designed primarily as a portfolio to showcase art and technical expertise. Visit and interact with the gallery, check out detailed views of artworks, and explore the story behind each piece that has shaped my journey.

## Future Enhancements

- **Backend Integration:**  
  Future plans include integrating a lightweight backend (e.g., Node.js or Python Flask) to manage user submissions (instead of a Google Form) and real-time updates. New artwork will continue to be added as well.
  

---

By documenting both my technical decisions and the creative process behind this project, I aim to provide a holistic view of my skills and passion. This repository is not only a digital gallery but also a personal testament to learning new languages and frameworks.

---
