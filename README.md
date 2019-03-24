# Star Wars database search

![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png "Logo Star Wars")

This app allows users to search in Star Wars database for characters or films

Users can filter the characters search result by gender or by movies they star in.

Users can switch the search result view to only see films, characters or both

When clicking on a search result item, users are redirected to the information page of this item. At the bottom of this page, users can enter their phone number to receive the item viewed information via sms

A customised error message page is shown in case of a fatal error happening (eg. when api calls fail).

The app uses:

- Redux for state management.
- Bootstrap classes and components for faster development.
- Formik for the forms instead of Redux forms, for performance purposes
- Jest and Enzyme for testing
- Twilio api for sending sms to users

## Getting Started

Install the project dependencies.
Node version 10+ is needed to run the app

```bash
yarn install
```

### Development

No need to build, just start the server.

```bash
yarn start
```

### Running unit tests locally

```bash
yarn test
```

### Production

Build the application.

```bash
yarn build
```

Start the application.

```bash
yarn start
```
