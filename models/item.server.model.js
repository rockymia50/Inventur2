import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  image:String,
  fullName: String,
  itemText: String,
  // itemDesc: String,
  
});
export default mongoose.model('Item', Schema);