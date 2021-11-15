import React, { useState } from "react";

import "./stories.styles.scss";

import STORIES_DATA from "./stories.data.js";

import Story from "../story/story.component";

function Stories() {
  const [sections] = useState(STORIES_DATA);
  const [activeId, setActiveId] = useState();

  return (
    <div className="stories">
      {sections.map(({ id, ...otherSectionProps }) => (
        <div
          onClick={() => setActiveId(id)}
          className={`story ${activeId === id ? "activeStory" : ""}`}
          key={id}
        >
          <Story {...otherSectionProps} />
        </div>
      ))}
    </div>
  );
}

export default Stories;
