export function FormatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };
  return date.toLocaleString("fr", options);
}

// const formattedDate = formatDate(
//   "Fri Mar 31 2013 20:26:24 GMT+0100 (West Africa Standard Time)"
// );
// console.log(formattedDate);
