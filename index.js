const express = require('express');
const app = express();
const authRouter = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const path = require('path');
const pageRoutes = require('./routes/page.routes');
const adminRoutes = require('./routes/admin.routes');
const preferenceRoutes = require('./routes/preference.routes');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
app.use(cors({ credentials: true})); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session
  ({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
  }));
app.use(morgan('dev'));


app.set('view engine', 'ejs');
app.set('views',  path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'static')));
app.use('/v1/api/auth', authRouter);
app.use('/v1/api/admin', adminRoutes);
app.use('/v1/api/preferences', preferenceRoutes);

app.use('/',pageRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});