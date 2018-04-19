// ./express-server/controllers/item.server.controller.js
import mongoose from 'mongoose';
//import models
import Item from '../models/item.server.model';
export const getItems = (req,res) => {
  Item.find().exec((err,items) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Items fetched successfully',items});
  });
}
export const addItem = (req,res) => {
  const newItem = new Item(req.body);
  newItem.save((err,item) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':'Item added successfully',item});
  })
}
export const updateItem = (req,res) => {
  Item.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,item) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(item);
    return res.json({'success':true,'message':'Updated successfully',item});
  })
}
export const getItem = (req,res) => {
  Item.find({_id:req.params.id}).exec((err,item) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(item.length){
      return res.json({'success':true,'message':'Item fetched by id successfully',item});
    }
    else{
      return res.json({'success':false,'message':'Item with the given id not found'});
    }
  })
}
export const deleteItem = (req,res) => {
  Item.findByIdAndRemove(req.params.id, (err,item) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
return res.json({'success':true,'message':item.itemText+' deleted successfully'});
  })
}