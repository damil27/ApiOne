import express from "express";
import moment from "moment-timezone";

const app = express();
const currentDay = moment().tz("UTC").format("dddd");
const PORT = 5000;
app.get("/api", (req, res) => {
    const currentUTC = getCurrentUTC();
  return res.json({
    slack_name: req.query.slack_name,
    current_day: currentDay,
    utc_time: currentUTC,
    track: req.query.track,
    github_file_url: "https://github.com/damil27/ApiOne/blob/main/index.js",
    github_repo_url: "https://github.com/damil27/ApiOne",
    status_code: 200,
  });
});

function getCurrentUTC() {
  const now = new Date();
  // Calculate the current UTC time with +/-2 minutes accuracy
  const currentUTC = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  currentUTC.setSeconds(0, 0);

  return currentUTC.toISOString();
}

app.listen(PORT, () => console.log(`app is running at ${PORT}`));


