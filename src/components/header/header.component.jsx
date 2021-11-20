import React from 'react';
import { Link } from 'react-router-dom';
import { VscOctoface } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

import './header.styles.scss';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Sidebar from '../../components/sidebar/sidebar.component';

const Header = () => (
  <Navbar className='px-4' bg='light' expand='lg' sticky='top'>
    <Container>
      <Navbar.Brand>
        <Link className='logo-container' to='/'>
          <IconContext.Provider value={{ size: '26px' }}>
            <VscOctoface />
          </IconContext.Provider>
          <span className='px-2 logo'>mainichōme</span>
        </Link>
      </Navbar.Brand>

      <Nav className='justify-content-end'>
        <Sidebar />
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
