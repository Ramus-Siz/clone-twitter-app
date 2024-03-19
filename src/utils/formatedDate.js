function FormatedDate(iscreatedAt) {
  const date = new Date(iscreatedAt);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  console.log("Date formate", formattedDate);
}
