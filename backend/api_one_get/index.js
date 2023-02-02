const express=require("express");
const mongoose=require("mongoose");
const dotEnv=require('dotenv');
const cors=require("cors");
const get_data_for_field=require("./router/path")
const post_data_for_field=require("./router/path")

dotEnv.config();
const app=express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL,{ useUnifiedTopology: true, useNewUrlParser: true },()=>{
    console.log("Connected to Database")
})

app.use(cors());
app.use(express.json());

// Defining routes using middlewares
app.use("/bitcoin",get_data_for_field)
app.use("/database",post_data_for_field)



const PORT=process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`)
})