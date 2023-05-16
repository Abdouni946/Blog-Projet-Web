const express = require('express');

const indexRouter = require('./routes/index');

const articlesRouter = require('./routes/articles'); // import articlesRouter
const usersRouter = require('./routes/users');
const commentairesRouter = require('./routes/commentaires');
const categoriesRouter = require('./routes/categories');
const app = express();

app.use(express.json());

app.use("/articles", articlesRouter);
app.use("/users", usersRouter);
app.use("/commentaires", commentairesRouter);
app.use("/categories", categoriesRouter);

app.use('/', indexRouter);

app.listen(3000);

module.exports = app;


