const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const userModel = require('./models/user.js')
const userAddShcema = require('./models/userAd.js')
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
const session = require("express-session");
const FileStore = require('session-file-store')(session);
const cors = require('cors');


const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');

mongoose.connect("mongodb+srv://admin:kAFZlQ6c9T6OK1m0@cluster0-nx2df.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/login', loginRouter);

module.exports = app;
