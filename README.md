# Building a RESTful CRUD API with Node.js & MongoDB

Features 
- a Server.js file that handles the data between the server and App
    - GET, GET :id, POST, PUT :id, DELETE :id
- a model schema for each product
    - inc timestamp
- 

## Get started
- Open Insomnia and VS code. 
- To start the local server run ```npm run serve```
- Use Insomnia to test the local server
    - console should also indicate this
- Run the HTML file in 'live server'
- Boom!

## Adding data to the database
Use insomnia with JSON format:
{
    "name": "test",
	"quantity": 4,
	"price": 1000,
	"image": "https://images.pexels.com/photos/6684255/pexels-photo-6684255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}

## Future Tasks...
- ✅ Create a get request to populate the product list
    - ✅ render the product list on an HTML page
    - ✅ tweak the CSS to make it a little more stylish
- Create an add product function
    - attached to an add button on a form at the bottom of the page
- ✅ Create an edit product function 
    - attached to an edit button for each item
- ✅ Create a delete product function
    - attached to a delete button for each item 

// https://www.youtube.com/watch?v=9OfL9H6AmhQ