import mongoose from "mongoose"

const Schema = mongoose.Schema


const categorySchema = new Schema ({
  title: {
    type: String,
    required: true,
    enum: ['Work', 'Life', 'Event']
  },
  color: {
    type: String,
    default: 'Grey',
    enum: ['Grey', 'Green', 'Yellow', 'Blue', 'Pink']
  },
})

const Category = mongoose.model('Category', categorySchema)

export { Category }