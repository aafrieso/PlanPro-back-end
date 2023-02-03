import { Profile } from "../models/profile.js"
import { Task } from "../models/task.js"

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile
    const task = await Task.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { tasks: task } },
      { new: true }
    )
    task.owner = profile
    res.status(201).json(task)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export {
  create,
}

export { }