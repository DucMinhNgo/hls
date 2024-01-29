const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3003;

// app.get("/status", (request, response) => {
//     const status = {
//         Status: "Running"
//     };

//     response.send(status);
// });

app.get("/:a", (request, response) => {
    console.log('request starting...');

    var filePath = './temp/chunks' + request.url;
    console.log(filePath);
})

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});