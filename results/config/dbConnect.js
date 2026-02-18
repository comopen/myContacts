const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;

220.66.241.21/32

기본 DNS 172.25.0.10
보조 DNS 202.30.48.21

1. 포트 개방 여부 확인 (가장 확실한 테스트)
**"외부 MongoDB 서비스(27017 포트) 접속 허용

C:\Users\Owner>curl -v telnet://jaeho.eu0vgsq.mongodb.net:27017
* Could not resolve host: jaeho.eu0vgsq.mongodb.net
* shutting down connection #0
curl: (6) Could not resolve host: jaeho.eu0vgsq.mongodb.net

mongodb+srv://admin:12345@jaeho.eu0vgsq.mongodb.net/
MongoDB Community Server Download
