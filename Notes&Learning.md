# Notes & Learning

### Using CORS
- For communication between backend server and front end
- CORS is a middlewear package
When using the local server for the backend and a 'live server' for the front end, there are often security conflicts to identify where the data is coming from?
add the CORS package to the dependancies and then run them. It's best not to ignor CORS protocols 

### Importing classes into HTML docs
In this particular app, Everything is rendered inside the <body> of the HTMl page. I used a ```styles.css``` file to create the CSS style for each item in the <ul> being rendered.
Because the <ul> is being rendered straight from a ```fetch```, the inline styles can be added to the ```document.createElement("li")``` via the following
```listItem.classList.add("product-item");```
Cool...! 

So much time spennt learning this. ⭐️
        