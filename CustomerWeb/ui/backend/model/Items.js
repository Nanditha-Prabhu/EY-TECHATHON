import mongoose from "mongoose";

const { Schema, model } = mongoose;

const itemSchema = new Schema({
    "_id" : String,
    "Brand" : String,
    "Gender" : String,
    "ItemType" : String,
    "ItemName" : String,
    "ItemDesc" : String,
    "Rate" : mongoose.SchemaTypes.Decimal128,
    "Occasion" : String,
    "Sleeve" : String,
    "MaterialsUsed" : String,
    "Season" : String,
    "Image" : String,
    "ItemId" : String,
    "ShopId" : String,
    "SStock" : String,
    "MStock" : String,
    "LStock" : String,
})

const Item = model("StylifyAIClothe", itemSchema, "StylifyAIClothes")

export default Item