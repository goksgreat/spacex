import React, { useState } from 'react';
import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import usePagination from '../../hooks/usePagination';
import Loader from '../Loader';

const LaunchPrograms = props => {
  const { launches = [], loading } = props;
  const { next, prev, paginatedData, currentPage, maxPage } = usePagination(
    launches,
    8,
  );
  return (
    <>
      <Row>
        {loading && <Loader />}
        {paginatedData &&
          paginatedData.map(launch => (
            <Col
              md={3}
              className="mb-4 d-flex align-items-stretch"
              key={launch.mission_name}
            >
              <Card className="launch-program">
                <Card.Img variant="top" src={launch.mission_patch_small} alt="launch-program" />
                <Card.Body>
                  <Card.Title>
                    <a
                      href={launch.article_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {launch.display_name}
                    </a>
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <div className="d-flex flex-column">
                      <strong>Mission IDs:</strong>
                      <div>
                        {launch.mission_id.map(mission => (
                          <li key={mission}>{mission}</li>
                        ))}
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex">
                      <strong>Launch Year:</strong>
                      <span>{launch.launch_year}</span>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex">
                      <strong>Successful Launch:</strong>
                      <span>{launch.launch_success ? 'True' : 'False'}</span>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex">
                      <strong>Successful Landing:</strong>
                      <span>{launch.land_success ? 'True' : 'False'}</span>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          ))}
      </Row>
      {maxPage > 1 && (
        <>
          <div>Page {currentPage} </div>
          <div>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
          </div>
        </>
      )}
    </>
  );
};

export default LaunchPrograms;
