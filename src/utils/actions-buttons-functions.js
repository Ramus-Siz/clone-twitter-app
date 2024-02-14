export function IncerementeOrDecrementeLikes(value) {
  if (value.isLiked == false) {
    // value.reactions = IncrementFormateLikes(value.reactions);
    value.reactions = value.reactions + 1;
    value.isLiked = true;
  } else {
    // value.reactions = DecrementFormateLikes(value.reactions);
    value.reactions = value.reactions - 1;
    value.isLiked = false;
  }
  return value.reactions;
}
// let numPart;
// let numberPart;
// let likeStat;
// function IncrementFormateLikes(likes) {
//   console.log(likes.endsWith("K"));
//   if (likes.endsWith("K")) {
//     numPart = parseFloat(likes) * 1000;
//     numberPart = numPart + 1;
//     console.log(numberPart);
//     likeStat = formatCash(numberPart);
//     console.log(likeStat);

//     return likeStat;
//   } else {
//     numPart = parseFloat(likes);
//     numberPart = numPart + 1;
//     likeStat = formatCash(numberPart);
//     return likeStat;
//   }
// }

// function DecrementFormateLikes(likes) {
//   if (likes.endsWith("K")) {
//     numPart = parseFloat(likes) * 1000;
//     numberPart = numPart - 1;
//     likeStat = formatCash(numberPart);
//     console.log(likeStat);
//     return likeStat;
//   } else {
//     numPart = parseFloat(likes);
//     numberPart = numPart + 1;
//     likeStat = formatCash(numberPart);
//     return likeStat;
//   }
// }
export function formatLikes(likes) {
  const formatLikes = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumSignificantDigits: 4,
  });
  return formatLikes.format(likes);
}
