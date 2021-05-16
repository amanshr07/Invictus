# Website hosted.
To view the website [Click here](https://invictus-frequency-words.herokuapp.com/) 
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Components 
### frequency-table.component.js 
This is used to calculate the frequency of differnts words. I haven't used any pre-defined function for the same. Inside this I have used 
1) componentDidMount(): is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle
2) Render a renderTable() or renderDataTable(): within an application page. renderTable uses a standard HTML table, while renderDataTable uses the DataTables Javascript library to create an interactive table with more features.
### navbar.component.js
To Create a navigation bar using reactJS & styled-component

### query.component.js
Used to take an Integer input, in context of the inputed number we create the required frequency table.

### 
## Libraries and plugins
     @testing-library/jest-dom": "^5.12.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "bootstrap": "^5.0.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
    
# Test cases
## Test Case 1: When Input integer is 5. 
#### Screen shot for the same 
![image](https://user-images.githubusercontent.com/42678955/118397218-a07bea80-b670-11eb-8e60-251664cf512d.png)

## Test Case 2: When Input integer is 1. 
#### Screen shot for the same 
![image](https://user-images.githubusercontent.com/42678955/118397317-05374500-b671-11eb-8a78-571691d9686a.png)

## Test Case 2: When Input integer is 10. 
#### Screen shot for the same 
![image](https://user-images.githubusercontent.com/42678955/118397353-2304aa00-b671-11eb-92f3-2dd84a33c83e.png)


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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
