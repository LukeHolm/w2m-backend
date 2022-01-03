const functions = require("firebase-functions");

const app = require('express')();

const FBAuth = require('./util/fbAuth');

const { getAllPosts, postAPost } = require('./handlers/posts');
const { signup, login, uploadImage } = require('./handlers/users');

// Post routs
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, postAPost);

//User route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);

 exports.api = functions.region('europe-west1').https.onRequest(app);