import { Amplify } from 'aws-amplify';

import { signInWithRedirect, signOut, getCurrentUser } from 'aws-amplify/auth';

// @ts-ignore
import awsExports from './aws-exports';
Amplify.configure(awsExports);

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor() {
    Amplify.configure(awsExports);
    console.log('constructed')
    getCurrentUser().then((data) => {
      console.log('constructor data', data)}
      ).catch((error) => {
        console.error('error', error)
      }).finally(() => {
        console.log('finally!!!!')
      })
  }

  signOut() {
    signOut();
  }

  signIn() {
    signInWithRedirect({ provider: 'Google' }) 
  }

}
