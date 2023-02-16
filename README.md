# Profoly

A big problem artists face is the inability to share their paintings/drawings. This web app solves this issue. It gives a place for artists to store their gallery along with a title and a description. It also has a forum page that lets you interact with other artist's and the stuff they post to the gallery. Profoly gives artists a place to store and show their creations.

## Getting Started

1. Create a new database in postgres called "prime_app" and run the sql queries in "database.sql".
2. Navigate through your terminal to where the file is and then type "npm install".
3. Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
4. Run postgres
5. Create two tabs in your terminal by pressing 'command t', then on one run "npm run server"
6. On the other run "npm run client"
7. Step 6 should have brought you to the web app if not type 'http://localhost:3000/' into your browser.

### Prerequisites

What things you need to install the software and how to install them

```
- [Node.js]
- [PostrgeSQL]
- [Nodemon]
- [Postico 2]
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* HTML
* CSS
* Bootstrap
* Javascript
* React
* Redux 
* Sagas
* Express

## Authors

* **Cole Dahlen** - *Sole Author* - [My GitHub](https://github.com/ColeDahlen)


## Acknowledgments

* Thank you to Matt Black for teaching me about these technologies for me to later use in this project.
