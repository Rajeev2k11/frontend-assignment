import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages/5 }, (_, i) => i + 1);

    // Function to handle the previous page change
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    // Function to handle the next page change
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            {/* Previous button */}
            <button 
                className="prev" 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
            >
                Previous
            </button>

          
            {pages.map((page) => (
                <button
                    key={page}
                    className={page === currentPage ? "active" : "hide"}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <span>.....</span>
            <button key={totalPages}
                    className={totalPages === currentPage ? "active" : "hide"}
                    onClick={() => onPageChange(totalPages)}>{totalPages}</button>
<div className="current-page">
                Page {currentPage} of {totalPages}
            </div>
            <button 
                className="next" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>

          
            
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
