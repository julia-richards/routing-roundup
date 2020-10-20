const express = require('express');
const app = express();

app.set('view engine', 'pug')


app.get("/*", (req, res) => {
    // res.render()
    res.send("Hello from Express!");
});

const port = 8081;
app.listen(port, () => { console.log(`Listening on port ${port}...`) });
