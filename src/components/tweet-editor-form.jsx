import { useState } from "react";

export default function TweetEditorForm({ register, clearInput }) {
  return (
    <input
      type="text"
      name="newTweet"
      {...register("newTweet", {
        required: "Obligatoire",
        maxLength: 180,
      })}
      className="tweet-editor-input"
      placeholder="What's happening"
      ref={clearInput}
    />
  );
}
