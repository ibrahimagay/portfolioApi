const express = require('express');
const app = express();
const fs = require('fs');

app.get('/component-service', function (req, res) {
    fs.readFile('./component-service.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

app.listen(1453, function () {
  console.log('1453 Sunucu çalışıyor...');
});