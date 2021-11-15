import React, { useState } from "react";
import { useParams } from "react-router-dom";

import contentData from "./content.data.js";
import Sentences from "../sentences/sentences.component";

import "./content.styles.scss";

function Content() {
  const { titleParam } = useParams();
  const [content] = useState(contentData);

  return (
    <div className="content">
      {content
        .filter(({ title }) => {
          return title.replace(/\s+/g, "-").toLowerCase() === titleParam;
        })
        .map(({ id, title, sentences }) => (
          <Sentences key={id} sentences={sentences} title={title} />
        ))}
    </div>
  );
}

export default Content;
