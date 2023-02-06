import mongoose from "mongoose"

const Schema = mongoose.Schema


const categorySchema = new Schema({
  title: {
    type: String,
  },
  color: {
    type: String,
    default: 'Grey',
    enum: ['Grey', 'Green', 'Yellow', 'Blue', 'Pink']
  },
}, {  
  timestamps: true,
})


const Category = mongoose.model('Category', categorySchema)

export { Category }