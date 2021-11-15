import React from "react";

import Container from "react-bootstrap/Container";

import Sentence from "../sentence/sentence.component";

import "./sentences.styles.scss";

const Sentences = ({ title, sentences }) => (
  <Container className="main ma mt-3">
    <h5 className="title text-center">{title}</h5>
    {sentences.map((sentence) => (
      <div key={sentence.id} className="sentences">
        <Sentence morphs={sentence.morphs} translated={sentence.translated} />
      </div>
    ))}
  </Container>
);

export default Sentences;
