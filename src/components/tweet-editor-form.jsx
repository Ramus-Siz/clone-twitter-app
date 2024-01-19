import { useState } from "react";

export default function TweetEditorForm({ setNewTweetsInput }) {
  console.log();
  return (
    <input
      type="text"
      name=""
      className="tweet-editor-input"
      id=""
      placeholder="What's happening"
      onChange={setNewTweetsInput}
    />
  );
}
