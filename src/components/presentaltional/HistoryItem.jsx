import React from 'react';
import PropTypes from 'prop-types';


function HistoryItem({url, method}) {
    return (
        <div>
            <p>Url: {url}</p>
            <p>Method: {method}</p>
        </div>
    )
}

HistoryItem.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
}

export default HistoryItem;
