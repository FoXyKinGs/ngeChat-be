const express = require('express')
const router = express.Router()
const { login, userRegister, getDetail, getAllUser, updateImage } = require('../controllers/user')
const { authentication } = require('../helpers/middlewares/auth')
const singleUpload = require('../helpers/middlewares/upload')

router
    .post('/login', login)
    .post('/register', userRegister)
    .get('/detailuser/:id', getDetail)
    .get('/alluser/:equal', getAllUser)
    .patch('/updateimage/:id', singleUpload, updateImage)
module.exports = router
