# bank-of-flatiron
This project is a React application designed to manage bank transactions, allowing users to add, search, sort, and delete transactions. The application features a dark theme with an optional gray theme and includes buttons for login and logout functionality, N\B The login logout functionality is not operating. It's just there.

Table of Contents
-Introduction
-Installation
-Usage
-Features
-File Structure

Introduction
The Bank of Flatiron application is a simple and intuitive web app that helps users manage their transactions efficiently. The app includes features like adding new transactions, searching through transactions, sorting transactions by various criteria, and deleting transactions. The app is built using React and styled with CSS.

Installation
Followed these steps to get the project up and running on my local machine:

-Clone the repository
-Install dependencies
-Start the development server
-Run the mock server for transactions

Usage
Access the application:
Open your browser and navigate to http://localhost:3000.

Add a new transaction:

Fill in the date, description, category, and amount in the form.
Click the "Add Transaction" button to submit the form.
Search transactions:

Use the search bar to filter transactions by description.
Sort transactions:

Click on the "Sort" button in each column header (Date, Description, Category, Amount) to sort transactions by that column.
Delete transactions:

Click the "Delete" button next to each transaction to remove it.


-Toggle theme:

Click the "Toggle Theme" button to switch between dark and gray themes.
Features
{The main reason for the dark and gray theme color was to match the rest of the css lay oout and i didn't want dark and white because white would be too shoutting}


-Add Transaction:
Fill in the date, description, category, and amount.
Click "Add Transaction" to submit the form and add the transaction.

-Search Transactions:
Use the search bar to filter transactions by description in real-time.

-Sort Transactions:
Sort transactions by date, description, category, or amount by clicking the "Sort" button in each column header.

-Delete Transactions:
Remove transactions by clicking the "Delete" button next to the transaction.

-Toggle Theme:
Switch between dark and gray themes using the "Toggle Theme" button.

-Login and Logout:
Buttons for login and logout are included in the header.

Footer Information:
-Contact details, email address, and career link are included in the footer.


File Structure
bank-of-flatiron/
\ -- public/
    -- favicon.ico          // 
    -- index.html           // Main HTML template file for the React app
    -- logo192.png          // 
    -- logo512.png          // 
    -- manifest.json        // Manifest file for Progressive Web App (PWA) settings
    -- robots.txt           // 
\ -- src/
     -- components/
        \ -- SearchBar.js        // React component for the search bar
        \ -- TransactionForm.css // CSS styles for the TransactionForm component
        \ -- TransactionForm.js  // React component for the transaction form
        \ -- TransactionTable.css// CSS styles for the TransactionTable component
        \ -- TransactionTable.js // React component for displaying the transaction table
     \ -- App.css                // CSS styles for the App component and overall app
     \ -- App.js                 // Main App component that houses other components
     \ -- App.test.js            // Test file for the App component
     \ -- index.css              // Global CSS styles for the application
     \ -- index.js               // Entry point for the React application
     \ -- reportWebVitals.js     // 
\ -- dg.json                    // JSON file with sample transaction data for the mock server
\ -- package.json               // Metadata and dependencies for the project
\ -- README.md                  // Detailed information about the project (file yenye tuko)


