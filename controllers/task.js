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

const index = async (req, res) => {
  try {
    const tasks = await Task.find({})
      .populate('owner')
      .sort({ createdAt: 'desc' })
    res.status(200).json(tasks)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
      .populate('owner')
      .populate('note.owner')
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('owner')
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  create,
  index,
  show,
  update,
}
