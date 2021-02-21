const conn = require('../config/config')

module.exports = {
    modelCheckEmail: (email, password) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM user WHERE email = '${email}'`, (err, result) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(result)
                }
            })
        })
    },
    modelRegister: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO user SET ?`, data, (err, response) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(response)
                }
            })
        })
    },
    modelGetDetailUser: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM user WHERE id = ${data}`, (err, response) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(response)
                }
            })
        })
    },
    modelGetAllUser: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM user WHERE id != ${data}`, (err, response) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(response)
                }
            })
        })
    },
    modelGetChat: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT chat.created_at, chat.from_id, chat.to_id, chat.message, user_from.username as from_name, user_from.room_id as from_room_id, user_to.room_id as to_room_id FROM chat LEFT JOIN user as user_from ON chat.from_id=user_from.id LEFT JOIN user as user_to ON chat.to_id = user_to.id WHERE (from_id='${data.id_from}' AND to_id='${data.id_to}') OR (from_id='${data.id_to}' AND to_id='${data.id_from}')`, (err, response) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(response)
                }
            })
        })
    },
    modelUpdateImage: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE user SET image = '${data.image}' WHERE id = '${id}'`, (err, response) => {
                if(err){
                    reject(new Error(err))
                }else{
                    resolve(response)
                }
            })
        })
    }
}