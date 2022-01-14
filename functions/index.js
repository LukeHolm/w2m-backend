const functions = require("firebase-functions");
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const { db } = require('./util/admin');

const { 
    getAllPosts,
    postAPost,
    getPost,
    commentOnPost,
    likePost,
    unlikePost,
    deletePost
} = require('./handlers/posts');

const { 
    signup, 
    login, 
    uploadImage, 
    addUserDetails,
    getAutheticatedUser,
    getUserDetails,
//    markNotificationsRead 
} 
    = require('./handlers/users');

// Post routs
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, postAPost);
app.get('/post/:postId', getPost);
app.delete('/post/:postId', FBAuth, deletePost);
app.get('/post/:postId/like', FBAuth, likePost);
app.get('/post/:postId/unlike', FBAuth, unlikePost);
app.post('/post/:postId/comment',FBAuth, commentOnPost);


//User route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAutheticatedUser);
app.get('/user/:handle', getUserDetails);
//app.post('/notifications',FBAuth, markNotificationsRead);

 exports.api = functions.region('europe-west1').https.onRequest(app);

 exports.createNotificationOnLike = functions.region('europe-west1').firestore.document('likes/{id}')
    .onCreate((snapshot) => {
        db.doc(`/posts/${snapshot.data().postId}`).get()
        .then(doc => {
            if(doc.exists){
                return db.doc(`/notifications/${snapshot.id}`).set({
                    createdAt: new Date().toISOString,
                    recipient: doc.data.userHandle,
                    sender: snapshot.data().userHandle,
                    type: 'like',
                    read: false,
                    postId: doc.id
                });
            }
        })
        .then(() => {
            return;
        })
        .catch(err => {
            console.error(err);
            return;
        });
    });

    exports.deleteNotificationOnUnlike = functions.region('europe-west1').firestore.document('likes/{id}')
    .onDelete((snapshot) => {
        db.doc(`/notifications/${snapshot.id}`)
        .delete()
        .then(() => {
            return;
        })
        .catch(err => {
            console.error(err);
            return;
        });
    });

    exports.createNotificationOnComment = functions.region('europe-west1').firestore.document('comments/{id}')
    .onCreate((snapshot) => {
        db.doc(`/posts/${snapshot.data().postId}`).get()
        .then(doc => {
            if(doc.exists){
                return db.doc(`/notifications/${snapshot.id}`).set({
                    createdAt: new Date().toISOString,
                    recipient: doc.data.userHandle,
                    sender: snapshot.data().userHandle,
                    type: 'comment',
                    read: false,
                    postId: doc.id
                });
            }
        })
        .then(() => {
            return;
        })
        .catch(err => {
            console.error(err);
            return;
        });
    });