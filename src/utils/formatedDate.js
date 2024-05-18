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

export function getFormattedDate() {
  const currentDate = new Date();

  // Obtenir les parties de la date
  const dayName = currentDate.toLocaleDateString("en-US", { weekday: "short" });
  const monthName = currentDate.toLocaleDateString("en-US", { month: "short" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const time = currentDate.toLocaleTimeString("en-US", { hour12: false });
  const timeZoneName = currentDate
    .toLocaleDateString("en-US", { timeZoneName: "long" })
    .split(", ")[1];

  // Obtenir le décalage horaire en minutes et le convertir en heures et minutes
  const offsetMinutes = currentDate.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetSign = offsetMinutes > 0 ? "-" : "+";
  const offsetString = `GMT${offsetSign}${String(offsetHours).padStart(
    2,
    "0"
  )}00`;

  // Construire la chaîne de date formatée
  const formattedDate = `${dayName} ${monthName} ${day} ${year} ${time} ${offsetString} (${timeZoneName})`;

  return formattedDate;
}
