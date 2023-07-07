# OCMS (Online Course Management System)
The project is created using Nodejs with Express framework and MongoDB as database in the backend and ReactJS in the frontend part.

## BACKEND
Move to the backend directory : 
``` 
cd backend
```

Before starting the backend server install the required dependencies with the following command:
```
npm install
```

To run the project first create a file named *secret.js* in the config folder containing the following code :

```
module.exports = {
    SECRET : '<your secret key for passport.js>',
    DB_USERNAME : '<your mongodb username>',
    DB_PASSWORD : '<your mongodb password>'
};
```
Note: Change the link of the mongodb cluster as per your link in *keys.js* in the config folder.

Save the file.

To run the backend run the following command:

For npm start:
```
npm start
```
If nodemon is to be used:
```
npm run server
```
After doing this backend will start at port : 5000 at [http://localhost:5000](http://localhost:5000) 

## FRONTEND
Move to the frontend directory : 
``` 
cd frontend
```

Before starting the frontend website install the required dependencies with the following command:
```
yarn install
```

After installing all the required dependancies run the following command to run the frontend website:

```
yarn start
```

After doing this the website will run at port : 3000 at [http://localhost:3000](http://localhost:3000) 

This Project is built by :
1. Shiladitya De
2. Sourabh Soumyakanta Das


