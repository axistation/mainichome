import React, { useState } from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { IconContext } from 'react-icons';

import './sidebar.styles.scss';

import Stories from '../stories/stories.component';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-grid gap-2'>
        <Button size='sm' variant='outline-dark' onClick={handleShow}>
          <IconContext.Provider value={{ size: '24px' }}>
            <GiSpellBook />{' '}
          </IconContext.Provider>
          Stories
        </Button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Pick a Story</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stories />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
