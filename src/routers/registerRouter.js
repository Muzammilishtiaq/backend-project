const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs")
const registerModel = require("../database/model/register");

router.post('/register', async (req, res) => {
    const creat = registerModel(req.body);
    const token = await creat.tokengenerate();
    console.log(token)
    const create = await creat.save();
    res.status(201).send(create);
});

router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const usermail = await registerModel.findOne({ email: email });
        const match = await bcryptjs.compare(password, usermail.password);
        console.log(match)
        // const token =   await usermail.tokengenerate();
        // console.log(token)
        if (match) {
            res.status(201).send('compare')
        } else {
            res.status(404).send("invalid login detail");
        }
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;