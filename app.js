const express = require('express');

const indexRouter = require('./routes/index');


const articlesRouter = require('./routes/articles'); // import articlesRouter
const usersRouter = require('./routes/users');
const commentairesRouter = require('./routes/commentaires');
const categoriesRouter = require('./routes/categories');
const authRouter = require('./routes/auth');

const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/articles", articlesRouter);
app.use("/users", usersRouter);
app.use("/commentaires", commentairesRouter);
app.use("/categories", categoriesRouter);
app.use("/auth", authRouter);
app.use('/', indexRouter);


module.exports = app;


