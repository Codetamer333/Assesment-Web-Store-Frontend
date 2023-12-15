
// The authSlice.js file is integral to the authentication management in your application. It utilizes Redux Toolkit's createSlice to define the auth slice of the application state, which specifically manages 
// authentication-related data. The slice initializes with a null token, indicating no user is logged in initially. It defines reducers like setCredentials to store the access token upon successful login and logOut to 
// reset the token when the user logs out. The slice also exports a selector, selectCurrentToken, for accessing the current token state within the app. This setup centralizes and streamlines the management of 
// authentication state.