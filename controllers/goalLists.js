import { Profile } from "../models/profile.js";
import { GoalList } from "../models/goalList.js";

const create = async (req, res) => {
  try {
    req.body.owner = req.user.profile
    const goalList = await GoalList.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { goals: goalList }},
      { new: true }
    )
    goalList.owner = profile
    res.status(201).json(goalList)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
    }
  }

const index = async (req, res) => {
  try {
    const goalList = await GoalList.find({})
      .populate('owner')
      .sort({ createdAt: 'desc' })
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

const show = async (req, res) => {
  try {
    const goalList = await GoalList.findById(req.params.id).populate("owner").populate('tasks')
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

const update = async (req, res) => {
  try {
    const goalList = await GoalList.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate('owner')
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteGoal = async (req, res) => {
  try {
    const goalList = await GoalList.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.goals.remove({ _id: req.params.id })
    await profile.save()
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  create,
  show,
  index,
  deleteGoal as delete,
  update as update 
}