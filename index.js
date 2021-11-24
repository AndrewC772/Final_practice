const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs").promises;

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});
app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.get("/homepage", (req, res) => {
  res.render("homepage");
});

app.post("/", (req, res) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./database.json", "utf-8")
    .then((data) => {
      console.log(req.body)
      original_file = JSON.parse(data)
      original_file["users"].push(
        {
          "id": "54az3",
          "fullName":req.body.fullName,
          "aboutMe": req.body.aboutMe,
          "knownTechnologies": [],
          "githubUrl": req.body.githubUrl,
          "twitterUrl": req.body.twitterUrl,
          "favoriteBooks": [],
          "favoriteArtists": []
        }
      )
      console.log(original_file["users"])
    })
    .catch((err) => reject(err));
})
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
