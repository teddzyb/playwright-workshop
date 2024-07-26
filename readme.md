# Playwright Test Project

This project contains automated tests for the functionalities of the [Sauce Demo](https://www.saucedemo.com/) web application using Playwright.

## Prerequisites

Before you can run the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (Node package manager)

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/teddzyb/playwright-workshop.git
   cd playwright-workshop
   ```
  
2. Install the dependencies:

    ```sh
    npm install
    ```

## Running the Tests

To run the tests, execute the following command:

  ```sh
  npx playwright test
  ```

This command will execute all the tests defined in the project.

## Project Structure

The project has the following structure:

- `tests/`: Contains the test files.
- `tests/test-1.spec.ts`: Contains the test for the login functionality.
- `tests/test-2.spec.ts`: Contains the test for the add to cart functionality.
- `tests/test-3.spec.ts`: Contains the test for the checkout functionality.
- `test-results/`: Contains the videos and screenshots of the test runs.
