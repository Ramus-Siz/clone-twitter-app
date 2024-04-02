export function FormatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long",
  };
  return date.toLocaleString("en-US", options);
}

// const formattedDate = formatDate(
//   "Fri Mar 31 2013 20:26:24 GMT+0100 (West Africa Standard Time)"
// );
// console.log(formattedDate);
