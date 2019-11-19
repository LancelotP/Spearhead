import firebase from 'firebase/app';
import 'firebase/auth';
import { Plugin } from '@nuxt/types';

const firebaseConfig = {
  apiKey: 'AIzaSyCqky0GZlRr29pb9YOjneNgC6AJ9LqtvwE',
  authDomain: 'skillroad-23646.firebaseapp.com',
  databaseURL: 'https://skillroad-23646.firebaseio.com',
  projectId: 'skillroad-23646',
  storageBucket: '',
  messagingSenderId: '982674608150',
  appId: '1:982674608150:web:e0900d912ee61ab0'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const AuthPlugin: Plugin = ({ app }) => {
  firebase.auth().onIdTokenChanged(async (user) => {
    if (user) {
      await app.$apolloHelpers.onLogin(await user.getIdToken());
    } else {
      await app.$apolloHelpers.onLogout();
    }
    
    console.log({ user });
  }, (error) => {
    console.error(error);
  });
  
}

export default AuthPlugin;