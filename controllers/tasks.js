import { Profile } from "../models/profile.js"
import { Task } from "../models/task.js"
import { GoalList } from "../models/goalList.js"

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile
    const task = await Task.create(req.body)
    const goalList = await GoalList.findByIdAndUpdate(
      req.body.goalListId,
      { $push: { tasks: task } },
      { new: true }
    ).populate('tasks')
    res.status(201).json(goalList)
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

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

const createStep = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    task.steps.push(req.body)
    await task.save()
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  create,
  index,
  show,
  update,
  deleteTask as delete,
  createStep
}
