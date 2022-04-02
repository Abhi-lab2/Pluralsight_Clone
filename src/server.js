const connect = require("./configs/db");
const app = require("./index");

app.listen(5000, async()=>{
    try{
        await connect();
        console.log("lsitening on port 5000");
    }catch(err){
        console.log(err.message)
    }
});