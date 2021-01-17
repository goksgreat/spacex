import React from 'react';
import { Card } from 'react-bootstrap';

const NotFound = () => (
    <>
    <div className="d-md-none d-flex not-found mobile container">
        <Card>
            <Card.Body className="d-flex">
        <small>No launches found in this category</small>
        </Card.Body>
        </Card>
    </div>
  <div className="not-found d-md-flex d-none">
    <small>No launches found in this category</small>
  </div>
  </>
);

export default NotFound;
