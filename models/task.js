import mongoose from "mongoose"

const Schema = mongoose from 'mongoose'

const stepListSchema = new Schema(
  {
      note: {
          type: String,
          required: true
      },
      taskName: "string",
      date: "number",
      time: "number",
      stepList: [stepListSchema],
      categroy: { type: Schema.Types.ObjectId, ref: 'Category'},
      owner: { type: Schema.Types.ObjectId, ref: 'Profile'}
  }
)

const Task = mongoose.model("Task", taskSchema)


export {
  Task
}