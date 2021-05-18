import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';


const HistoryList = ({ historyItems }) => (<ul aria-label='historyItems'>

    {historyItems.map((item) => (<li key={Math.random()}>
        <HistoryItem url={item.url} method={item.method} />
    </li>

    ))}</ul>
);

HistoryList.propTypes = {
    historyItems: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            method: PropTypes.string.isRequired,
        })
    )
}

export default HistoryList;
