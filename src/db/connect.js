const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/mainserver",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(`Connection done`)
}).catch((e)=>{
    console.log(`connection failed`)
})