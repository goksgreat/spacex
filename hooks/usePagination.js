import React, { useState, useEffect } from 'react';

const usePagination = (dataItems, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setCurrentdata] = useState(dataItems);
  const [paginatedData, setPaginatedData] = useState([]);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    setPaginatedData(currentData());
  }, [currentPage, dataItems]);

  useEffect(() => {
    setCurrentdata(dataItems);
    setPaginatedData(currentData(dataItems));
  }, [dataItems]);

  function currentData(dataItems) {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return dataItems ? [...dataItems].slice(begin, end) : [...data].slice(begin, end);
  }

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, paginatedData, currentPage, maxPage };
}

export default usePagination;
