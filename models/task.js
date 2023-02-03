const taskSchema = new Schema(
  {
      note: {
          type: String,
          required: true
      },
      taskName: "string",
      date: "number",
      time: "number",
      stepList: [stepList],
      categroy: { type: Schema.Types.ObjectId, ref: 'Category'},
      owner: { type: Schema.Types.ObjectId, ref: 'Profile'}
  }
)

const Task = mongoose.model("Task", taskSchema)


export {
  Task
}