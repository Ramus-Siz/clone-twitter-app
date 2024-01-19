export default function TweetButton({ handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="button">
      Tweet
    </button>
  );
}
