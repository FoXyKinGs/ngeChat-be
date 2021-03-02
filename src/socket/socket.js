const socketio = require('socket.io')
const db = require('../config/config')
const { modelGetAllUser, modelGetChat } = require('../models/user')

module.exports = (server) => {
    const io = socketio(server, {
        cors: {
          origin: '*'
        }
      })
      
      io.on('connection', (socket) => {
        socket.on('join-room', (roomID) => {
          socket.join(roomID)
        })
      
        socket.on('get-list-user', (userId, roomID) => {
          modelGetAllUser(userId).then((response) => {
            io.to(roomID).emit('res-get-list-user', response)
          }).catch((err) => {
            console.log(err)
          })
        })
      
        socket.on('get-chat', (user) => {
          modelGetChat(user).then((response) => {
            io.to(user.room_id).emit('res-get-chat', response)
          }).catch((err) => {
            console.log(err)
          })
        })
      
        socket.on('send-message', (msg) => {
          db.query(`INSERT INTO chat (from_id, to_id, message) VALUES ('${msg.from}','${msg.to}','${msg.msg}')`, (err, result) => {
            db.query(`SELECT chat.created_at, chat.from_id, chat.to_id, chat.message, user_from.username as from_name, user_from.room_id as from_room_id, user_to.room_id as to_room_id FROM chat LEFT JOIN user as user_from ON chat.from_id=user_from.id LEFT JOIN user as user_to ON chat.to_id = user_to.id WHERE (from_id='${msg.from}' AND to_id='${msg.to}') OR (from_id='${msg.to}' AND to_id='${msg.from}')`, (err, result) => {
              io.to(result[0].from_room_id).emit('res-get-chat', result)
              io.to(result[0].to_room_id).emit('res-get-chat', result)
            })
          })
        })
      })
}