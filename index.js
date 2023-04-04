import express from 'express';
import bodyParser from 'body-parser'; // take incoming port req bodies.

import usersRoutes from './routes/users.js'; // add exports in the users.js file


const app = express();
const PORT = 3000;

app.use(bodyParser.json()); // to specify the use of json data in the app.

// setting the starting path, using the imported usersRoutes
app.use('/users', usersRoutes); // all routes start with /users


//creating the first route . // / root page
// this only shows in the console because browser only gets the GET request
app.get('/', (req, res,) => { res.send('Homepage here test');});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));



