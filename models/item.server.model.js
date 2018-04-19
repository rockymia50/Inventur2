import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  fullName: String,
  itemText: String
});
export default mongoose.model('Item', Schema);