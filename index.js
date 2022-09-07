const express = require('express');
const path = require('path');

const app = express();
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.listen(3000, () => {
    console.log('http://localhost:3000');
});
app.get('', (req, res) => {
    let name = 'Tuyen';
    res.render('index', {
        user: name
    });
});


