import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

import Hiragana from "../../components/hiragana/hiragana.component";
import Katakana from "../../components/katakana/katakana.component";

import "./homepage.styles.scss";

const HomePage = () => (
  <Container className="homepage">
    <Tabs defaultActiveKey="hiragana" className="my-4">
      <Tab eventKey="hiragana" title="Hiragana">
        <Hiragana />
      </Tab>
      <Tab eventKey="katakana" title="Katakana">
        <Katakana />
      </Tab>
      <Tab eventKey="kanji" title="Kanji"></Tab>
    </Tabs>
  </Container>
);

export default HomePage;
