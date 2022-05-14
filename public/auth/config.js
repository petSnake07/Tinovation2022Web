/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
    apiKey: "AIzaSyDl2uFhvZ3i7qiP2OS1WPax12lRrrITqi0",
    authDomain: "campus-map-2022.firebaseapp.com",
    projectId: "campus-map-2022",
    storageBucket: "campus-map-2022.appspot.com",
    messagingSenderId: "854998946250",
    appId: "1:854998946250:web:a3dd176bb207a47d5d7f33",
    measurementId: "G-WZ8WX3BXWW"
};
firebase.initializeApp(config);


// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
    'YOUR_OAUTH_CLIENT_ID';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDl2uFhvZ3i7qiP2OS1WPax12lRrrITqi0",
    authDomain: "campus-map-2022.firebaseapp.com",
    projectId: "campus-map-2022",
    storageBucket: "campus-map-2022.appspot.com",
    messagingSenderId: "854998946250",
    appId: "1:854998946250:web:a3dd176bb207a47d5d7f33",
    measurementId: "G-WZ8WX3BXWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);