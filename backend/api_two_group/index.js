const express=require("express");
const mongoose=require("mongoose");
const dotEnv=require('dotenv');
const cors=require("cors");
const get_data_for_group=require("./Route/pathy")
const post_data_for_group=require("./Route/pathy")

dotEnv.config();
const app=express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL,{ useUnifiedTopology: true, useNewUrlParser: true },()=>{
    console.log("Connected to Database")
})

app.use(cors());
app.use(express.json());

// Defining routes using middlewares
app.use("/select",post_data_for_group)
app.use("/liked",get_data_for_group)



const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`)
})