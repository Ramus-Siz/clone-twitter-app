import { useState } from "react";

export default function TweetEditorForm({ register }) {
  return (
    <input
      type="text"
      name="newTweet"
      {...register("newTweet", {
        required: "You haven't entered any tweets",
        maxLength: 180,
        pattern: {
          value: /\S/,
          message: "This field has the wrong format",
        },
      })}
      className="tweet-editor-input"
      placeholder="What's happening"
    />
  );
}
