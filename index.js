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

  const year = currentUTC.getUTCFullYear();
  const month = String(currentUTC.getUTCMonth() + 1).padStart(2, "0");
  const day = String(currentUTC.getUTCDate()).padStart(2, "0");
  const hours = String(currentUTC.getUTCHours()).padStart(2, "0");
  const minutes = String(currentUTC.getUTCMinutes()).padStart(2, "0");
  const seconds = String(currentUTC.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

app.listen(PORT, () => console.log(`app is running at ${PORT}`));


