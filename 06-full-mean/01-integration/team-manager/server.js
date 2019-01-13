const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

require('./server/config/database');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve('dist/team-manager')));

app.use('/api', require('./server/routes'));
app.use(require('./server/routes/catch-all.route'));
// app.all('*', (request,response, next) => {
//   response.sendFile(path.resolve('./dist/team-manager/index.html'));
//   console.log(request.url);
// });


app.listen(port, () => console.log(`Listening on port ${port}`));
