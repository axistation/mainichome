import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getContentData } from './content.data.js';
import Sentences from '../sentences/sentences.component';

import Scroll from '../scroll/scroll.component';

import './content.styles.scss';

import ScrollProgressRead from 'react-scroll-progress-read';

function Content() {
  const { titleParam } = useParams();
  const [content, setContent] = useState([]);

  useEffect(() => {
    (async () => {
      setContent(await getContentData());
    })();
  }, []);

  return (
    <div className='content'>
      <div
        style={{ margin: 0, padding: 0, position: 'fixed', left: 0, top: 57 }}
      >
        <ScrollProgressRead
          target='read-container'
          barColor='rgba(143, 0, 255, 1)'
        />
      </div>
      <Scroll />
      <div id='read-container'>
        {content
          .filter(({ title }) => {
            return title.replace(/\s+/g, '-').toLowerCase() === titleParam;
          })
          .map(({ id, title, sentences }) => (
            <Sentences key={id} sentences={sentences} title={title} />
          ))}
      </div>
    </div>
  );
}

export default Content;
