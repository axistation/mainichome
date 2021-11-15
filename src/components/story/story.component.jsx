import React from "react";
import { withRouter } from "react-router-dom";

import "./story.styles.scss";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const Story = ({ title, level, readTime, history, match }) => {
  function handleClick() {
    history.push(`${match.url}${title.replace(/\s+/g, "-").toLowerCase()}`);
  }

  return (
    <ListGroup>
      <ListGroup.Item
        action
        className="d-flex justify-content-between align-items-start"
        onClick={handleClick}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold title">{title}</div>
          <div className="read-time">{readTime} read</div>
        </div>
        <Badge bg="dark" pill>
          {level}
        </Badge>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default withRouter(Story);
