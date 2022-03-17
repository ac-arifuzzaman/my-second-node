const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello bangladesh. wellcome to my node setver");
});

const users = [
  { id: 0, name: "shabana", email: "shabana@gmaail.com", number: 017457574 },
  { id: 1, name: "shabnur", email: "shabnur@gmaail.com", number: 017457574 },
  { id: 2, name: "purnima", email: "purnima@gmaail.com", number: 017457574 },
  { id: 3, name: "popy", email: "popy@gmaail.com", number: 017457574 },
  { id: 4, name: "mummun", email: "mummun@gmaail.com", number: 017457574 },
];

app.get("/user", (req, res) => {
  const search = req.query.search;
  // search query parametar
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/user", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("listining the port ", port);
});
