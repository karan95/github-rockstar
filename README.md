# Welcome to GitHub Rockstar App:

### Overview:
- Welcome to GitHub Rockstar App. You can use this app to get top 5 repositories by most stars and top 5 users by most followers. 
- Data Source by GitHub API: https://docs.github.com/

### Tech Stack:
- React, Bootstrap(style)

### App Usage Guide:
- On Dashboard page, only one tab will be active at a time: 'Get Top Repositories' or 'Get Top Users' 
- Click on 'Get Top Repositories' button updates the table content with repositories data 
- Click on 'Get Top Users' button updates the table content with users data 
    - click on 'Get Top Users' button starts the interval of 2 minutes to update followers
    - User's followers are updated every 2 minutes
    - click on 'Get Top Repositories' will end the timer

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

