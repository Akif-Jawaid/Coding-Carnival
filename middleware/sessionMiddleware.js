const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const store = new MongoDBStore({
  //uri: "mongodb://localhost:27017/codingCarnival",
  uri : "mongodb+srv://akifjawaid:Akif%401234@akif.qnk74s9.mongodb.net/coding_carnival",
  collection: "sessions",
});

const sessionMiddleware = session({
  secret: "your-secret-key",
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
});

module.exports = sessionMiddleware;
