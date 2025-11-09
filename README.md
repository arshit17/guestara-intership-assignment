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
Resource&nbsp;&nbsp;	      Method&nbsp;&nbsp;	   Endpoint	Description<br>
Category&nbsp;&nbsp;	      POST&nbsp;&nbsp;	      /api/category  Create a new category<br>
Category&nbsp;&nbsp;       PUT&nbsp;&nbsp;	      /api/category/:id  Edit category<br>
Subcategory&nbsp;&nbsp;	   POST&nbsp;&nbsp;	      /api/subcategory  Create a new subcategory<br>
Subcategory&nbsp;&nbsp;	   PUT&nbsp;&nbsp;	      /api/subcategory/:id  Edit subcategory<br>
Item&nbsp;&nbsp;	         POST&nbsp;&nbsp;	      /api/item  Create a new item<br>
Item&nbsp;&nbsp;	         PUT&nbsp;&nbsp;	      /api/item/:id  Edit item<br>
Item&nbsp;&nbsp;	         GET&nbsp;&nbsp;	      /api/item/search?name=<item_name>  Search items by name<br>

## Q&A:-
1. Which database you chose and why?<br>
-> I used MySQL, because it’s relational and structured, making it perfect for the Category–Subcategory–Item hierarchy. It enforces schema consistency and foreign key relationships efficiently.

2. 3 things you learned from this assignment:<br>
-> REST API design using Express.js<br>
-> Writing clean SQL queries and handling CRUD operations<br>
-> Structuring a backend with modular routes and .env configuration<br>

4. Most difficult part:<br>
-> Designing the relational database schema and debugging MySQL syntax errors during insert and update operations.<br>

5. What would you do differently with more time:<br>
-> Add input validation, authentication (JWT), and deploy the backend to Render or Railway with a proper frontend demo.<br>
