import mongoose from "mongoose";

const { Schema, model } = mongoose


const clothSchema = new Schema({
    ItemId: String,
    StoreId: String,
    Gender: String,
    ItemType: String,
    ItemName: String,
    Cost: mongoose.SchemaTypes.Decimal128,
    ImgAdrs: String
})

const Clothes = model("Clothe", clothSchema)


export default Clothes