import React from "react";
import Story from "./Story/Story";
import "./StoryReel.css";

const img =
  "https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://media1.tenor.com/images/68fece74e03435ff62d8f3f865a798a8/tenor.gif"
        profileSrc="https://media1.tenor.com/images/c3ad27351392e7b95717d86f9a597e89/tenor.gif"
        title="IndominouS"
      />
      <Story
        image="https://media1.tenor.com/images/0d08dd7d0be9a756a1c3baf0abb966d2/tenor.gif"
        profileSrc="https://media1.tenor.com/images/6c743272210513b9599cd69df496a40e/tenor.gif"
        title="AV"
      />
      <Story
        image="https://media1.tenor.com/images/7bbcd067efce256c746bab5bb793c256/tenor.gif"
        profileSrc="https://media1.tenor.com/images/c3ad27351392e7b95717d86f9a597e89/tenor.gif"
        title="Hasbulla"
      />
      <Story
        image="https://media1.tenor.com/images/1db2fccdc0867c3b86cbf8b1a756f730/tenor.gif?itemid=21894027"
        profileSrc="https://media1.tenor.com/images/6c743272210513b9599cd69df496a40e/tenor.gif"
        title="Hasbulla 2"
      />
      <Story
        image="https://media.tenor.com/images/097449ac548b3c616a4d4cb1aa6f6ba0/tenor.gif"
        profileSrc="https://media1.tenor.com/images/c3ad27351392e7b95717d86f9a597e89/tenor.gif"
        title="Hasbulla 3"
      />
    </div>
  );
}

export default StoryReel;
