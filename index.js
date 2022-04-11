const express = require("express"); 
const indexRouter = require("./routes/router");
const authRouter = require("./routes/auth.router")
// const {login, register} = require("./controllers/auth.controller")

const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//     console.log("Global Middleware");
//     next();
// })
app.use("/auth", authRouter);
app.use("/", indexRouter);


app.listen(8080, () => {
    console.log("Server running successfully")
});