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



export {
  createGoal,
  showGoal
}