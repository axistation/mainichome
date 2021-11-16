import React, { useState, useEffect } from 'react';

import './stories.styles.scss';

import Story from '../story/story.component';

import { getContentData } from '../content/content.data';

function Stories() {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState();

  useEffect(() => {
    (async () => {
      setSections(await getContentData());
    })();
  }, []);

  return (
    <div className='stories'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <div
          onClick={() => setActiveId(id)}
          className={`story ${activeId === id ? 'activeStory' : ''}`}
          key={id}
        >
          <Story {...otherSectionProps} />
        </div>
      ))}
    </div>
  );
}

export default Stories;
