import mongoose from 'mongoose'

const Schema = mongoose.Schema


const goalListSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
    owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task'}]
})


const profileSchema = new Schema({
  name: String,
  photo: String,
  task: [taskSchema],
  goals: [goalListSchema],
},{
  timestamps: true,
})



const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
