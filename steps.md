# Notes

## installing packages
run in terminal ->

npm init -y

npm install express ejs express-ejs-layouts method-override

mkdir views routes static 

touch server.js views/fallback.ejs views/error.ejs routes/frontpage.js routes/error.js static/style.css views/frontpage.ejs views/layout.ejs 

## routes

### /frontpage 
- responds to /

### /error
- responds if no other router processed the request
