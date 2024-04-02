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

export function GenerateCreatedDataAndHour() {
  // Créer un nouvel objet Date
  let dateActuelle = new Date();
  // Formater la date et l'heure avec le nom du fuseau horaire
  let options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "long",
  };
  let dateFormatee = dateActuelle.toLocaleString("en-US", options);
  console.log(dateFormatee);

  // retourner la date et l'heure formatées
  return dateFormatee;
}
