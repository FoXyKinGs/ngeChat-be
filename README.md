# backend ngeChat
pertama download repo ini, lalu instal terlebih dahulu
```
npm install
```

lalu import terlebih dahulu ngeChat.sql nya, yang sudah tersedia di repo ini

gunakan .env dengan isi
```
PORT= port yang akan digunakan
DB_HOST= host yg digunakan
DB_USER= username db
DB_PASS= password db
DB_NAME= nama db
JWT_SECRET= masukan jwt secret dengan value yang unique untuk menjadi signature verifier di jwtnya (ex: kuncijwt123)
```

lalu gunakan perintah `nodemon` untuk memulai menjalankan aplikasi

beberapa module yang digunakan
- ExpressJS
- MySQL2
- Body Parser
- cors 
- bcrypt
- multer
- dotend
- nodemon
- JWT
- socket.io