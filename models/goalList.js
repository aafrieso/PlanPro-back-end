import mongoose from "mongoose"

const Schema = mongoose.Schema


const goalListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
}, {
  timestamps: true,
})


const GoalList = mongoose.model('GoalList', goalListSchema)

export { GoalList }

