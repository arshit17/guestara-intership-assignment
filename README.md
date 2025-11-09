# Guestara Internship Assignment - NodeJS Backend

## Overview
A Node.js + Express backend for menu management with Category, Subcategory, and Item APIs.

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/arshit17/guestara-intership-assignment
   cd guestara Internship
   npm install
   npm start

## API Overview
Resource	      Method	   Endpoint	Description
Category	      POST	      /api/category	Create a new category
Category	      PUT	      /api/category/:id	Edit category
Subcategory	   POST	      /api/subcategory	Create a new subcategory
Subcategory	   PUT	      /api/subcategory/:id	Edit subcategory
Item	         POST	      /api/item	Create a new item
Item	         PUT	      /api/item/:id	Edit item
Item	         GET	      /api/item/search?name=<item_name>	Search items by name

1. Which database you chose and why?
-> I used MySQL, because it’s relational and structured, making it perfect for the Category–Subcategory–Item hierarchy. It enforces schema consistency and foreign key relationships efficiently.

2. 3 things you learned from this assignment:
-> REST API design using Express.js
-> Writing clean SQL queries and handling CRUD operations
-> Structuring a backend with modular routes and .env configuration

4. Most difficult part:
-> Designing the relational database schema and debugging MySQL syntax errors during insert and update operations.

5. What would you do differently with more time:
-> Add input validation, authentication (JWT), and deploy the backend to Render or Railway with a proper frontend demo.
