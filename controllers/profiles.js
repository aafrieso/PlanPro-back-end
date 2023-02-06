import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'
import { GoalList } from '../models/goalList.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

const showProfile = async (req, res) => {
  try {
    const profile = await Profile.find(req.user.profile)
    .populate('goals')
    res.status(201).json(profile)
  } catch (error) {
    res.status(500).json(error)
  }
}

export { 
  index, 
  addPhoto,
  showProfile
}
