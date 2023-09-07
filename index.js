import express from "express";
import moment from "moment-timezone";

const app = express();
const currentDay = moment().tz("UTC").format("dddd");
const currentUTC = moment.tz("UTC").format("YY-MM-DDTHH:mm:ss[Z]");
const PORT = 5000;
app.get("/api", (req, res) => {
  return res.json({
    slack_name: req.query.slack_name,
    current_day: currentDay,
    current_utc_time: currentUTC,
    track: req.query.track,
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  });
});

app.listen(PORT, () => console.log(`app is running at ${PORT}`));