import React from 'react';
import { Card } from 'react-bootstrap';
import constants from '../../helpers/constants';
import RenderFilters from './RenderFilters';
import filters from '../../helpers/filters';

const Filters = (props) => {
  return (
    <Card>
      <Card.Title className='ml-1'>{constants.filterTitle}</Card.Title>
      <Card.Body className='pt-0'>
        <RenderFilters filters={filters} />
      </Card.Body>
    </Card>
  );
};

export default Filters;
