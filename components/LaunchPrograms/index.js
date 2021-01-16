import React from 'react';
import { Card, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import usePagination from '../../hooks/usePagination';
import Loader from '../Loader';
import ProgressiveImage from 'react-progressive-image';
import constants from '../../helpers/constants';

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
                <ProgressiveImage
                  src={launch.mission_patch_small}
                  placeholder="/placeholder.jpg"
                >
                  {src => (
                    <Card.Img variant="top" src={src} alt="launch-program" />
                  )}
                </ProgressiveImage>
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
                      <strong>{constants.missionIdsTitle}</strong>
                      <ul>
                        {launch.mission_id.map(mission => (
                          <li key={mission}>{mission}</li>
                        ))}
                      </ul>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex">
                      <strong>{constants.launchYearTitle}</strong>
                      <span>{launch.launch_year}</span>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex">
                      <strong>{constants.successfulLaunchTitle}</strong>
                      <span>{launch.launch_success ? 'True' : 'False'}</span>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem>
                    <div className="d-flex">
                      <strong>{constants.successfulLandingTitle}:</strong>
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
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
              <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                <span className="page-link" onClick={prev} tabindex="-1">
                  {constants.previousTitle}
                </span>
              </li>
              <li className="page-item">
                <span className="page-link">{currentPage}</span>
              </li>
              <li
                className={`page-item ${currentPage === maxPage && 'disabled'}`}
              >
                <span className="page-link" onClick={next}>
                  {constants.nextTitle}
                </span>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default LaunchPrograms;
