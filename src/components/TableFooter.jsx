import React from 'react';
import TriangleDown from "./UI/icons/TriangleDown";
import ArrowPrev from "./UI/icons/ArrowPrev";
import ArrowNext from "./UI/icons/ArrowNext";

const TableFooter = ({pagination}) => {

    const prevPage = (currentPage) => {
        const prevPage = currentPage - 1;
        if (currentPage > 1) {
            pagination.setCurrentPage(prevPage);
            pagination.fetchUsers(pagination.limit, prevPage);
        } else {
            pagination.setCurrentPage(pagination.totalPages);
            pagination.fetchUsers(pagination.limit, pagination.totalPages);
        }
    }

    const nextPage = (currentPage, totalPages) => {
        const nextPage = currentPage + 1;
        if (currentPage < totalPages) {
            pagination.setCurrentPage(nextPage);
            pagination.fetchUsers(pagination.limit, nextPage);
        } else {
            pagination.setCurrentPage(1);
            pagination.fetchUsers(pagination.limit, 1);

        }
    }

    return (
        <div className="table__footer">
            <div className="table__rowsPage">
                <span className="table__footerText">Rows per page: {pagination.limit}</span>
                <button type="button">
                    <TriangleDown/>
                </button>
            </div>
            <div className="table__footerText table__totalUser">
                {`${pagination.currentPage} of ${pagination.totalPages}`}
            </div>
            <div className="table__swipingBtns">
                <button type="button" onClick={() => prevPage(pagination.currentPage)}>
                    <ArrowPrev/>
                </button>
                <button type="button" onClick={() => nextPage(pagination.currentPage, pagination.totalPages)}>
                    <ArrowNext/>
                </button>
            </div>
        </div>
    );
};

export default TableFooter;