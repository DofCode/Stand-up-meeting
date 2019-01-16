<p align="center">
  <h1 align="center">Stand-up meeting</h1>
  <p align="center">A project by J. Alejandro Arias</p>
</p>

![Stand up meeting](https://firebasestorage.googleapis.com/v0/b/sum-luminux.appspot.com/o/capture.png?alt=media&token=14429a25-0cea-4725-9e50-0fcfca0e1022)

## What is Stand-up meeting?

A [Stand-up meeting](https://en.wikipedia.org/wiki/Stand-up_meeting) (or simply "stand-up") is a meeting in which attendees typically participate while standing. The discomfort of standing for long periods is intended to keep the meetings short.

## How does it work?

The idea is to add the daily tasks for the development team, the tasks have three states: In progress, waiting and ready.

It is only possible to manage your own tasks as a user.

## Install

```bash
npm install
```

## Connection with Firebase:

```ts
//  src/environments/environment.ts

export const environment = {
  production: false ,
  firebaseConfig : {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```


## What does my Firebase project need?

- **Firestore** - Activate the Firestore module as a database.
- **Authentication with Google** - Activate the authentication module with Google.
- **Collections in the BD** - The collections that will be used in the BD are: `users` and `taks`.


## Running application:

```bash
ng serve
```