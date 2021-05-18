import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';


function HistoryItem({url, method}) {
    return (
        <div className={styles.history}>
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
