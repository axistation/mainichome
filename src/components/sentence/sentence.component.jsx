import React from 'react';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import './sentence.styles.scss';

const Sentence = ({ morphs, translated }) => (
  <div className='sentence-group'>
    <div className='sentence-japanese'>
      <div className='morphs'>
        {morphs.map((morph) => (
          <span key={morph.id}>
            <OverlayTrigger
              key='top'
              placement='top'
              overlay={
                <Popover>
                  <Popover.Header className='popover-header'>
                    <span className='kana'>{morph.kana}</span> /{' '}
                    <span className='romaji'>{morph.romaji}</span>
                  </Popover.Header>
                  <Popover.Body className='popover-body'>
                    {morph.meaning}
                  </Popover.Body>
                </Popover>
              }
            >
              <span className='morph'>{morph.name}</span>
            </OverlayTrigger>
          </span>
        ))}
      </div>
      <div className='sentence-translated'>{translated}</div>
    </div>
  </div>
);

export default Sentence;
