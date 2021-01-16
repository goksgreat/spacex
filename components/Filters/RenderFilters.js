import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Filters = props => {
  const { filterOptions = [], filters, modifyFilters } = props;

  const onFilterSelect = (filterType, filterVal) => {
    const filtersObj = { ...filters };
    if (filtersObj[filterType] && filtersObj[filterType] === filterVal)
      delete filtersObj[filterType];
    else {
      filtersObj[filterType] = filterVal;
    }
    modifyFilters(filtersObj);
  };

  return filterOptions.map(filter => (
    <div key={filter.value}>
      <p className="text-center mb-0">{filter.label}</p>
      <hr className="mt-0" />
      <Row className="mb-4">
        {filter.options &&
          filter.options.map((filterVals, index) => (
            <Col
              xs={6}
              key={filterVals.value}
              className={`${index % 2 === 0 ? 'left-col' : 'right-col'}`}
            >
              <span
                className={`labelCell ${
                  filters[filter.value] &&
                  filters[filter.value] === filterVals.value
                    ? 'selected'
                    : 'not-selected'
                }`}
                onClick={() => onFilterSelect(filter.value, filterVals.value)}
              >
                {filterVals.label}
              </span>
            </Col>
          ))}
      </Row>
    </div>
  ));
};

export default Filters;
