import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

function Display({ response }) {
    return (
        <>
            <h1>Display Window</h1>
            <pre className={styles.display}>Response: {JSON.stringify(response.response, null, 2)}</pre>
        </>
    )
}

Display.propTypes = {
    response: PropTypes.object.isRequired,
}

export default Display;
