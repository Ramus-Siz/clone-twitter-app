export default function TweetButton({ hundleClick }) {
  return (
    <button type="submit" className="button" onClick={hundleClick}>
      Tweet
    </button>
  );
}
