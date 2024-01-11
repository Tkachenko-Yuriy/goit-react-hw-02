export default function getSmiley(moodNumber) {
  if (moodNumber > 50) {
    return "😊";
  } else if (moodNumber < 50) {
    return "☹️";
  } else {
    return "😐";
  }
}
