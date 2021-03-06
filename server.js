const JsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = JsonServer.create();
const router = JsonServer.router("db.json");

app.db = router.db;

const rules = auth.rewriter({
  users: 644,
  watchlist: 644,
});

app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
