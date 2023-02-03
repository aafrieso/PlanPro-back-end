import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new Schema({
  name: String,
  photo: String,
  goals: [{ type: Schema.Types.ObjectId, ref: 'GoalList'}]
},{
  timestamps: true,
})



const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
