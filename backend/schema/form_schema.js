const {Schema, model} = require('mongoose')


const formSchema=new Schema({
    username:{type:String,required:true},
    email: {type: String, required: true},
    message:{type:String, required:true},
})
const Form=mongoose.model('Form',formSchema)
module.exports=Form