import { goalList } from "../models/goalList";

const createGoal = async (req, res) => {
  for (let key in req.body) {
    if (req.body[key] ==='') delete req.body[key]
  }
  goalList.create(req.body)
  .then(goal => {
    res.status(201).json(goal)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const showGoal = async (req, res) => {
  goalList.findbyId(req.params.id)
  .then(event => {
    res.json(goalList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

const goalIndex = async (req, res) => {
  goalList.find({})
  .then(goalList => {
    res.json(goalList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

const deleteGoal = async (req, res) => {
  goalList.findByIdAndDelete(req.params.id)
  .then(deletedGoalList => {
    res.json(deletedGoalList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

const updateGoal = async (req,res) => {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  goalList.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(updatedGoalList => {
    res.json(updatedGoalList)
  })
  .catch(err => {
    console.log(err)
    res.json(err)
  })
}

export {
  createGoal,
  showGoal,
  goalIndex,
  deleteGoal as delete,
  updateGoal as update 
}