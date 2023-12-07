import React from "react";
import { Header, Tweets } from "../components";
import { TweetEditorForm } from "../components";
import { TweetAvatar } from "../components";
import { TweetButton } from "../components";
import { TweetButtonActions } from "../components";

function Home({ title }) {
  return (
    <main className="timeline">
      <Header title={"Home"} />
      <div className="tweet-editor">
        <TweetAvatar />
        <div className="tweet-editor-form">
          <TweetEditorForm />
          <div className="tweet-editor-buttons">
            <TweetButtonActions />
            <TweetButton />
          </div>
        </div>
      </div>
      <Tweets />
    </main>
  );
}

export default Home;
