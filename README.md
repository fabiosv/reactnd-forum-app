# Readable Project

This project is an assessment project for Udacity's React Fundamentals course. The goal is practice the fundamentals learning
in the course as control components, state management, functional components, Route and so on.

The following features should be implemented (to be accepted):
- Display 4 views : 'Main Page', 'Category Page', 'Post Details', 'New Post'
- User may create, read, edit and delete a Post
- User may create, read, edit and delete a Comment within Post
- User may vote on Comment and Post
- User may sort Post/Comments by Vote Score or Date
- User may read comments from a post
- User may read Posts from their categories, if url indicate a wrong category but Post exist so show 404 page
- When User delete a Post and try read this post so show 404 page.
- Category Page should display its posts
- Post Details should display post with main attributes + related comments

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install` or `yarn install`
* install all project dependencies with `npm install --no-bin-links` if you are using Vagrant or VirtualBox
* start the development server with `npm start` or `yarn start`
* also live at link https://reactnd-forum-app.herokuapp.com (may take a while on first load and after certain time without navigation)

## Project Structure
```bash
├── README.md       - This file.
├── API_SERVICES.md # The whitelisted services available from backend API + documentation
├── package.json    # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico   # React Icon, You may change if you wish.
│   └── index.html    # DO NOT MODIFY
│   └── manifest.json # DO NOT MODIFY
└── src
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── actions     # This is where redux actions are stored
    │   ├── categories.js # Categories actions to be dispatched to reducer
    │   ├── comments.js   # Comments actions to be dispatched to reducer
    │   ├── posts.js      # Posts actions to be dispatched to reducer
    │   └── shared.js     # Commons actions to be dispatched to reducer
    ├── components  # This is where react components and views are stored
    │   ├── App.css     # Styles for your app. Feel free to customize this as you desire.
    │   ├── App.js      # This is the root of the app. Contains routes to related views.
    │   ├── components   # This is where react components invoked by views are stored
    │   │   ├── categories # This is where components related to categorie are stored
    │   │   │   ├── categories.css # Styles for categories component
    │   │   │   └── categories.js  # Categories component, used to navigate through them and filter posts
    │   │   ├── comment    # This is where components related to comments are stored
    │   │   │   ├── commentCard.js       # Card displaying comments info: comment, author, timestamp, current score and Vote Component, edit and delete button
    │   │   │   ├── commentsContainer.js # List of Comments + Tools component to add and sort comments (connect component)
    │   │   │   ├── createComment.css    # Styles for CreateComment component
    │   │   │   └── createComment.js     # Component to create Comment
    │   │   ├── commons    # This is where generic components are stored
    │   │   │   ├── header.js  # Header Component
    │   │   │   ├── loader.css # Styles for loader
    │   │   │   ├── loader.js  # Loader Component
    │   │   │   ├── tools.js   # Add and Sort button (for comment or post)
    │   │   │   └── vote.js    # Mechanism to Increase and Decrease Score rate (comment or post)
    │   │   └── post       # This is where components related to posts are stored
    │   │       ├── postCard.js       # Card displaying post title, body, authors, comment count, current score and Vote Component, edit and delete button
    │   │       ├── posts.css         # Styles for postCard and commentCard
    │   │       └── postsContainer.js # List of Posts + Tools component to add and sort posts (connect component)
    │   └── views        # This is where react components related to views/route are stored (connect components)
    │       ├── mainPage.css   # Styles for MainPage Component
    │       ├── mainPage.js    # 'Main Page' and 'Category Page' serving at '/' and '/:category'
    │       ├── managePost.css # Styles for ManagePost Component
    │       ├── managePost.js  # 'New Post' view serving at '/post/create-update/new' to create and '/post/create-update/:post-id' to edit Post
    │       └── postDetail.js  # 'Post Details' view serving at '/:category/:post-id'
    ├── middleware  # This is where redux middleware are stored
    │   ├── index.js    # This is where Redux 'applyMiddleware' is stored, it mix all middlewares used for this React-Redux Project
    │   └── logger.js   # A Redux Middleware to log all actions events on browser's console
    ├── reducers    # This is where redux reducers are stored
    │   ├── categories.js       # Category reducer
    │   ├── comments.js         # Comments reducer
    │   ├── index.js            # This is where Redux 'combineReducers' is stored, it mix all reducers used for this React-Redux Project
    │   ├── loading.js          # Loading reducer
    │   ├── posts.js            # Posts reducer
    │   └── selectedCategory.js # SelectedCategory reducer (used when user switch category from Categories Component, so highlight selected category/button)
    ├── index.css   # Global styles
    ├── index.js    # This is where Redux Store is created, importing 'combineReducers' and 'applyMiddleware'
    ├── serviceWorker.js # You should not need to modify this file. It is used for DOM rendering only.
    └── utils       # This is where helpers code are stored as API integration
        ├── API # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
        │   ├── categories.js # API related to categories
        │   ├── comments.js   # API related to comments
        │   ├── posts.js      # API related to posts
        │   ├── settings.js   # API settings (API_HOST, commons functions)
        │   └── shared.js     # getInitialData function to handle initial data fetch (if category specified, fetch post from this category otherwise fetch all posts)
        └── alertController.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

The backend server is deployed at https://reactnd-forum-api.herokuapp.com, Instructions for the methods are in API_SERVICES.md

## General Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
