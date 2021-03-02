const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const { modelCheckEmail, modelRegister, modelGetDetailUser, modelGetAllUser, modelUpdateImage } = require('../models/user')

module.exports = {
    userRegister: (req, res) => {
    const body = req.body
    // Generate random number with year, month, day, hour, minute, second, milisecond and Math random method
    let timestamp = new Date().getUTCMilliseconds();
    let now = new Date();
    timestamp = now.getFullYear().toString()
    timestamp += (now.getMonth < 9 ? '0' : '') + now.getMonth().toString()
    timestamp += ((now.getDate < 10) ? '0' : '') + now.getDate().toString()
    timestamp += (now.getHours().toString())
    timestamp += (now.getMinutes().toString())
    timestamp += (now.getSeconds().toString())
    timestamp += (now.getMilliseconds().toString())
    timestamp += (Math.floor(Math.random() * 100).toString())
    //--------------------------------------------
    
    modelCheckEmail(body.email).then(async(response) => {
        if(response.length >= 1){
            res.status(500).send('Email registered')
        }else{
            const salt = await bcrypt.genSalt(10)
            const password = await bcrypt.hash(body.password, salt)

            const data = {
                room_id: timestamp,
                username: body.username,
                email: body.email,
                password,
                image: 'default_image.png',
                bio: "Hey there i'm using ngeChat!",
                phone: "+62",
                lat: "-6.89846733562317",
                lng: "107.60501039761238"
            }

            modelRegister(data).then((response) => {
                res.status(200).send('Register Success')
            }).catch((err) => {
                res.status(500).send('Internal Server Error')
            })
        }
    }).catch((err) => {
        res.status(500).send('Internal Server Error')
    })   

    },
    login: (req, res) => {
    const body = req.body
    modelCheckEmail(body.email).then(async(response) => {
        if(response.length === 1){
            const checkPassword = await bcrypt.compare(body.password, response[0].password)
            if(checkPassword){
                const dataUser = {
                    id: response[0].id,
                    room_id: response[0].room_id,
                    username: response[0].username,
                    email: response[0].email,
                }
                const token = jwt.sign(dataUser, process.env.JWT_SECRET)
                const data = [dataUser, token]
                res.status(200).send(data)
            }else{
                res.status(400).send('Wrong password')
            }
        }else{
            res.status(400).send(`Email didn't registered`)
        }
    })
    },
    getDetail: (req, res) => {
        const id = req.params.id
        modelGetDetailUser(id).then((response) => {
            res.status(200).send(response)
        }).catch((err) => {
            res.status(500).send(err)
        })
    },
    getAllUser: (req, res) => {
        const equal = req.params.equal
        modelGetAllUser(equal).then((response) => {
            res.status(200).send(response)
        }).catch((err) => {
            res.status(500).send(err)
        })
    },
    updateImage: async(req, res) => {
        try {
            const id = req.params.id
            const path = './public/image/'
            const img = await modelGetDetailUser(id)
            if( img[0].image !== 'default_image.png'){
               fs.unlink(path + img[0].image, (err) => {
                   if(err){
                       res.status(500).send('internal server error')
                       return
                   }
               }) 
            }
            const data = {
                image: req.file.filename
            }
            modelUpdateImage(data, id).then((response) => {
                res.status(200).send('success')
            }).catch((err) => {
                res.status(500)
            })
        } catch (err){
            res.status(500)
        }
    }
}
