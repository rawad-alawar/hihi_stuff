# Full-stack

## Intro

Today we'll walk through the steps of a simple full-stack JavaScript app.

What it will look like is an application which shows us everyone who is in our cohort / school.
It might also show us details on a particular student.

![](app_example.png)

We'll do this by building a server which does 2 things: 
 - provides an API
 - serves client-side pages (html, css, bundled js)

The client-side page will be loaded, then immediately ask for some data from the API.
The results will be rendered into the page using a renderer bundled into your client-side JS.

**Challenge** - if you think you can do this challenge without guidance, check out [hard-mode](README-hard-mode.md)


## Release 0: Static file server.

Make a basic setup which can serve up an `index.html` file, making sure we keep the files we want to give to the client in a `client` folder.

1. Clone this repo and cd into it. Run `npm init -y` to create a package.json.
1. Create an `server.js` file in the root of the project. This will be your server. 
1. Create a `client/` folder for client-side files we'll serve. Put an `index.html` with some basic content in this folder.
1. Install `express` so you can require it in your `server.js`. 
  - Here's a minimal setup example : http://expressjs.com/en/starter/hello-world.html
1. Tell the express server which static files you'd like it to serve. 
  - Hint: http://expressjs.com/en/starter/static-files.html

Spin up your server and make sure you can use it to get it to serve your `index.html` file.


## Release 1: Client-side JavaScript

Set up client side javascript - you'll need to set up Browserify.
We're going to keep our files nice and seperate, have our source dev file called `src/index.js` and have Browserify ouput to `client/app.js`.

_Bonus points: minify your bundled js_

1. Make a file in `src/index.js`
1. Set up Browserify to bundle this file to a file `client/app.js`
1. Include the bundled file in your `client/index.html`
  - you want the script to run after the whole `index.html` has been loaded - do this by putting the script tag at the bottom of the file, or if you put your script file in the head, and add some [document ready checks](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded).
1. Add some simple JS that will let you determine whether the bundled JS has made it into the `index.html`

Reload your `index.html` and prove that your client-side JS is in place and working.


---

> Do 2a / 2b in either order.

---

## Release 2a: Client-side templating

Choose a templating language of preference and install it so that it work in you client-side js.

1. Check out the set-up of either handlebars, or hyperscript from an earlier challenge.
1. Put some view code in a `views/` folder, then include that and use it in your `src/index.js`
  - put some hard-coded student data in your `src/index.js` just to prove you can get a template working
  - pause to plan the structure of data you expect your students API should provide
  - if you're using handlebars, make sure you check how you're bundling

Reload your `index.html` and prove your templating is working.
You should be be able to see at least 2 student rendered on the page


## Release 2b: Add a JSON API to your server

Adjust your express server (`./server.js`) to serve a JSON array using a RESTful route for your student resources.

1. Create a REST route `/api/v1/sutdents` that listens for GET requests in **your server**
1. Have it respond with a hard-coded array of classmate names in JSON format
  - Hint: check out `res.json()`

Navigate your browser to localhost:[PORT]/api/v1/students in you browser, or using Postman to check the api is working


## Release 3: Client-server messaging

Link your Client-side js to your API.
Have the page automatically request the current students data, then renderer those results to the page.

1. Install your favourite request module in `src/index.js`
1. Remove your hard coded data from this file and have your request get the data for you
1. In the request callback, have render the result data using your client-side template setup

You should see all students rendered on the page.

Stretch - add a listener to each student, so that when clicked the view is changed to just that student record (perhaps with more detail, and a larger photo). You might like to include another RESTful route for practice, to fetch that specific student (e.g. `api/v1/students/5`)


## Release 4: Finesse

Now we're going to set things up so that we don't have to keep restarting the server or re-bundling our client JavaScript each time we make a change.

1. Install [node-dev](https://www.npmjs.com/package/node-dev) and [watchify](https://www.npmjs.com/package/watchify) with `npm install watchify node-dev --save-dev`
1. Create two scripts in your package.json: "serve" and "watch-client".
1. In "serve" add "node-dev [your server]"
1. In "watch-client" add "watchify src/index.js -o client/bundle.js -dv"

Now you should be able to run `npm run serve` in one terminal and `npm run wach-client` in another. When you change the your client/app.js it will be automatically re-bundled (you will still need to re-start the server to re-serve the fresh bundle.js).

When you make changes to your `server.js` and save it will automatically restart.


Background:

 * [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)

 * [Browserify handbook](https://github.com/substack/browserify-handbook#watchify)


## Release 6: File-system persistance

At the moment our server just serves data defined in our server and held in memory. Let's use the file system to persist our data.

1. Create a directory `data/` and a file `data/db.json`
1. db.json should have a key "students" the value of which is an array of student names.
1. Use `fs.readFile` to retrieve the db.json and the students *when the clientrequests them* (inside the `app.get('/api/v1/students',`  callback).


## Release 7: Test-driven

Now we've got a working MVP up, we'll get a testing setup up and running so that we can stabilise what we've got an build better things as we move forward.

1. Create a folder `test/` and a file `test/api-tests.js`.
1. Install [supertest](https://www.npmjs.com/package/supertest) `npm install tape supertest --save-dev`
1. You will need to export the app in server.js. Create a new file `index.js and require your server app into it. Setup the app.listen() in index.js. This file will be the entry point for your server.
1. Adjust the "serve" script in package.json so that points to `index.js`.
1. In `test/api-test.js require supertest and your server:

```js
var test = require('tape')
var server = require('../server')
var request = require('supertest')
```

Remember:

1. Arrange: setup your fake data and expected results.
1. Action: make a get request to your JSON API using supertest (request).
1. Assert: does the repsonse match what you expect?

Because the app is so simple at this point this will feel superfluous. Just get used to the practice of setting up a test.

Now write a very similar test in your `api-test.js` but for teachers rather than students `api/v1/teachers`.

Make the test pass coding another route in `server.js`.

Finally add a test for retrieving a student by id. You may use the index in the array of students or you may use an array of objects where each object has an `id` property.

The route you are testing will look like this `/api/v1/students/:id`. Make the test pass.


## Release 8a: Queryable 

Teach your API to respond to query params like `/api/vi/students?nationality=new+zealander` and return only matching results


## Release 8b: Local networking.

Split it the server.js into 2 and introduce an external API. In your pair decide who will serve the teachers and who will server the students.

1. Add and commit your changes and push them to the repo.
1. One person will clone the repo and branch off the pair's branch.
1. Both of you will need to find your own ip address on the local network
1. Setup your server's so that one of you has the teachers and the other the students in your db.json.
1. When a server recieves a GET for `/users` it will make a GET to your partner's server and respond to the client with both teachers and students.


---


## Resources

Number| Name
------|-------------------
.     | [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)
.     | [Browserify handbook](https://github.com/substack/browserify-handbook#watchify)
.     | [supertest](https://www.npmjs.com/package/supertest)
.     | [Jquery from a cdn](https://developers.google.com/speed/libraries/)
.     | [Full stack](http://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/)










