export function IncerementeOrDecrementeLikes(value) {
  if (value.isLiked == false) {
    value.reactions = value.reactions + 1;
    value.isLiked = true;
  } else {
    value.reactions = value.reactions - 1;
    value.isLiked = false;
  }
  return value.reactions;
}
