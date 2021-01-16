import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Filters = (props) => {
  const { filters = [] } = props;
  return filters.map((filter) => (
    <div key={filter.value}>
      <p className='text-center mb-0'>{filter.label}</p>
      <hr className='mt-0' />
      <Row className='mb-4'>
        {filter.options &&
          filter.options.map((filterVals, index) => (
            <Col
              xs={6}
              key={filterVals.value}
              className={`${
                index % 2 === 0 ? 'left-col' : 'right-col'
              }`}
            >
              <span className="labelCell">{filterVals.label}</span>
            </Col>
          ))}
      </Row>
    </div>
  ));
};

export default Filters;
