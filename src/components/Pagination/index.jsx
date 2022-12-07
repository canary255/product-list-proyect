import React, { useState, useEffect } from "react";

const Pagination = ({ range, setPage, page, slice }) => {
  const [neighbours, setNeighbours] = useState([]);

  useEffect(() => {
    try {
      var data = [];
      if (slice.length < 1 && page !== 1) {
        setPage(1);
      }

      var start = page - 1;
      var end = page + 1;

      if (start === 0) {
        start = page;
        end = page + 2;
      } else if (end === range.length + 1) {
        start = page - 2;
        end = page;
      }

      for (let i = start; i <= end; i++) {
        if (i > 1 && i < range.length) {
          data.push(i);
        }
      }

      setNeighbours(() => {
        return data;
      });
    } catch (e) {
      setNeighbours(() => {
        return [];
      });
      setPage(() => {
        return 1;
      });
    }
  }, [slice, page, setPage]); //eslint-disable-line

  function checkPreviousPage(page, limit) {
    if (page >= limit) {
      setPage(page);
    }
  }

  function checkNextPage(page, limit) {
    if (page <= limit) {
      setPage(page);
    }
  }

  return (
    <div className="pagination">
      <button onClick={() => checkPreviousPage(page - 1, 1)}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <button
        className={`${page === 1 ? "light-blue" : ""}`}
        onClick={() =>
          setPage(() => {
            return 1;
          })
        }
      >
        1
      </button>

      {page > 2 && <button disabled>...</button>}

      {neighbours.map((el, index) => (
        <button
          key={index}
          className={`${page === el ? "light-blue" : ""}`}
          onClick={() =>
            setPage(() => {
              return el;
            })
          }
        >
          {el}
        </button>
      ))}

      {page < range.length - 1 && (
        <button className="" disabled>
          ...
        </button>
      )}

      {range.length > 1 && (
        <button
          className={`${page === range.length ? "light-blue" : ""}`}
          onClick={() =>
            setPage(() => {
              return range.length;
            })
          }
        >
          {range.length}
        </button>
      )}

      <button onClick={() => checkNextPage(page + 1, range.length)}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
