const express = require("express");
const cors = require("cors");
const app = express();

const port = 9090;

app.use(cors());
app.use(express.json());

app.post("/api/registration", (req, res) => {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const inf = req.body
    let newObj = {}

    if (inf.name === "") {
        newObj['name'] = 'empty name'
    }
    if (inf.email === "") {
        newObj['email'] = 'empty email'
    }else if (!(re.test(String(inf.email).toLowerCase()))){
        newObj['email'] = 'not correct email'
    }
    if (inf.text === "") {
        newObj['text'] = 'empty text field'
    }
     if(inf.phone === '+375(__)___-__-__'){
        newObj['phone'] = 'empty phone'
    }


    if (Object.keys(newObj).length > 0) {
        res.statusCode = 400;

        setTimeout(() => {
            res.send({
                status: "error",
                fields: JSON.stringify(newObj),
            });
        }, Math.random() * 1000);

        return;
    }

    setTimeout(() => {
        res.statusCode = 200;
        res.send({
            status: "success",
            msg: "Ваша заявка успешно отправлена",
        });
    }, Math.random() * 1000);
});

app.get("/api/ping", (req, res) => {
    res.statusCode = 200;
    res.send({
        status: "success",
        message: "Server is ready",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
