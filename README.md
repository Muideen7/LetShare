# LetShare
LetShare is a web application built with the MERN (MongoDB, Express.js, React, and Node.js) stack. Its primary goal is to facilitate the connection between restaurants and charity homes, ultimately aiming to reduce food waste and combat global hunger. This README file serves as a comprehensive guide to setting up, running, and contributing to the LetShare project.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

In many parts of the world, a significant amount of food goes to waste, while many people are still suffering from hunger. FoodShare Connect aims to bridge this gap by providing a platform for restaurants to efficiently donate excess food to charity homes. This web app allows restaurants to list available surplus food items, and charity homes can easily discover and request donations. It helps restaurants reduce food waste, and charity homes ensure that their residents are well-fed.

## Features

FoodShare Connect comes with several key features, including:

- **User Authentication:** Secure user registration and login system.
- **Restaurant Profiles:** Restaurants can create and manage their profiles, including information about their food items and availability.
- **Charity Home Profiles:** Charity homes can create and manage profiles, making it easier for restaurants to find them.
- **Food Listings:** Restaurants can list surplus food items with details like name, description, quantity, and expiration date.
- **Donation Requests:** Charity homes can request food donations from restaurants.
- **Real-time Messaging:** Secure messaging system for restaurants and charity homes to communicate about donations.
- **Search and Filter:** Users can search for specific food items and filter results based on various criteria.
- **Dashboard:** Interactive dashboards for both restaurants and charity homes to manage their activities

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** You need to have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB:** Make sure you have MongoDB installed and running. You can download it from [mongodb.com](https://www.mongodb.com/).
- **Git:** You'll need Git for version control. Download it from [git-scm.com](https://git-scm.com/).

## Installation

Follow these steps to set up FoodShare Connect:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/foodshare-connect.git
   ```
2. Cd LetShare

3. Install the server dependencies:
  ``` cd server
npm install
```

4. Start the client:
```
cd ../client
npm start
```
5. Access the application in your web browser at http://localhost:3000.

## Contributing
We welcome contributions to LetShare. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
```
git checkout -b feature-name
```
3. Make your changes and test them thoroughly.
4. Commit your changes with a descriptive commit message:
```
git commit -m "Add new feature" -m "A more detailed description of your changes."
```
5. Push your branch to your forked repository:

```
git push origin feature-name
```
6. Open a pull request from your fork to the main repository's main branch.
7. Ensure your pull request follows our code of conduct and coding guidelines.

## License
LetShare is licensed under the MIT License. See the LICENSE file for more details.

Thank you for your interest in FoodShare Connect! We hope this project can have a positive impact in reducing food waste 
and fighting global hunger. If you have any questions or encounter issues, please feel free to contact us or open an issue in the repository.
