import React from 'react';
import { PerPage } from '../../types/PerPage';

type Props = {
  total: number;
  perPage: PerPage;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const countPages = Math.ceil(total / perPage);
  const pages = Array.from({ length: countPages }, (_, ind) => ind + 1);
  const maxCountPage = Math.ceil(total / perPage);

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === maxCountPage;

  return (
    <ul className="pagination">
      <li className={isPrevDisabled ? 'page-item disabled' : 'page-item'}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={isPrevDisabled ? true : false}
          onClick={() => {
            if (!isPrevDisabled) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          «
        </a>
      </li>

      {pages.map((pageNumber, index) => (
        <li
          key={index}
          className={
            currentPage === pageNumber ? 'page-item active' : 'page-item'
          }
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${pageNumber}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      ))}

      <li
        className={
          currentPage === maxCountPage ? 'page-item disabled' : 'page-item'
        }
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={isNextDisabled ? true : false}
          onClick={() => {
            if (!isNextDisabled) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
