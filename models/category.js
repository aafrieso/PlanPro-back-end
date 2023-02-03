import mongoose from "mongoose"

const Schema = mongoose.Schema


const categorySchema = new Schema (
  rateNum: {
    type: Number,
    enum: ["1", "2", "3", "4", "5"]
  },
  name: "string",
  color: {
    type: String,
    default: 'Grey',
    enum: ['Grey', 'Green', 'Yellow', 'Blue', 'Pink']
  },
)

const Category = mongoose.model('Category', catergorySchema)

export {
  Category
}