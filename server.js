const express = require('express');
const app = express();
const path= require('path');
const port = process.env.PORT || 8080;

// Since the root/src dir contains our index.html
app.use(express.static(__dirname + '/build'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
app.listen(port, () => console.log(`Server started on ${port}`));