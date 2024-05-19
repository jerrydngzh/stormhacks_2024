const firebaseAdmin = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage'); // ??
const dotenv = require('dotenv');
dotenv.config();

const serviceAccount = require('../key/serviceAccountKey.json');

firebaseAdmin.initializeApp(
    {
        credential: firebaseAdmin.credential.cert(serviceAccount),
        storageBucket: process.env.BUCKET_NAME
    }
)

module.exports = firebaseAdmin