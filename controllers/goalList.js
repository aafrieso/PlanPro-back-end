import { goalList } from "../models/goalList";

const createGoal = async (req, res) => {
  try {
    req.body.owner = req.user.profile
    const goalList = await goalList.create(req.body)
    const profile = await Profile.findByIdAndUpdate(
      req.user.profile,
      { $push: { goalLists: goalList }},
      { new: true }
    )
    goalList.owner = profile
    res.status(201).json(goalList)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
    }
  }

const goalIndex = async (req, res) => {
  try {
    const goalList = await goalList.find({})
      .populate('owner')
      sort({ createdAt: 'desc' })
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

const showGoal = async (req, res) => {
  try {
    const goalList = await goalList.findById(req.params.id).populate("owner")
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

const updateGoal = async (req, res) => {
  try {
    const goalList = await goalList.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate('owner')
    res.status(200).json(goalList)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteGoal = async (req, res) => {
  try {
    const goalList = await goalList.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.tenants.remove({ _id: req.params.id })
    await profile.save()
    res.status(200).json(tenant)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  createGoal,
  showGoal,
  goalIndex,
  deleteGoal as delete,
  updateGoal as update 
}