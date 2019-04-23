const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
})

module.exports = function upload(req, res) {
    const values = Object.values(req.files)
    console.log(values)
    const promises = values.map(image => cloudinary.uploader.upload(image.path))
    
    Promise
      .all(promises)
      .then(results => res.json(results))
      .catch((err) => res.status(400).json(err))
}