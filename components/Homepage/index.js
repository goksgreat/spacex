import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Filters from '../Filters';
import LaunchPrograms from '../LaunchPrograms';
import { fetchData } from '../../helpers/helpers.js';
import Router, { useRouter } from 'next/router';

const Homepage = props => {
    const { params } = props;
  const [filters, setFilters] = useState({
    limit: 100,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(router.query);
  const [launches, setLaunces] = useState([]);
  const fetchPrograms = filterVal => {
    setLoading(true);
    setLaunces([]);
    fetchData({
      url: `api/v1/launches`,
      data: filterVal || filters,
      method: 'POST',
      onSuccess: data => {
        setLaunces(data);
        setLoading(false);
      },
      onFailure: err => {
        setLoading(false);
        setLaunces([]);
      },
    });
  };

  useEffect(() => {
    !params.limit && Router.push({ pathname: '/', query: filters });
  }, [params])

  React.useEffect(() => {
    if (params && params.limit) {
      setFilters(params);
      fetchPrograms(params);
    }
  }, [params]);
  return (
    <Row>
      <Col md={3} lg={3}>
        <Filters />
      </Col>
      <Col md={9} lg={9}>
        <LaunchPrograms launches={launches} loading={loading} />
      </Col>
    </Row>
  );
};

export default Homepage;
