require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
require("./database/connection");
const registerrouteruse =require("./routers/registerRouter");
app.use(express.json());
app.use(registerrouteruse);

app.get('/', (res, req) => {
    res.send('hi i am live')
})

app.listen(PORT, () => {
   console.log( `back end server is connect ${PORT}`)
});

// const createToken = async()=>{
//    const token = await jwt.sign({_id:"662103e96528affa59bcd168"}, "muzamil");
//    const verify = await  jwt.verify(token,'muzamil')
//    console.log(verify)
// }

// createToken()