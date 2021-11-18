import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getContentData } from './content.data.js';
import Sentences from '../sentences/sentences.component';

import Scroll from '../scroll/scroll.component';
import ReadingProgress from '../readingprogress/readingprogress.component';

import './content.styles.scss';

function Content() {
  const { titleParam } = useParams();
  const [content, setContent] = useState([]);
  const target = React.createRef();

  useEffect(() => {
    (async () => {
      setContent(await getContentData());
    })();
  }, []);

  return (
    <div className='content'>
      <ReadingProgress target={target} />
      <div ref={target}>
        <Scroll />
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
