import React from 'react';
import button from '../../assets/black_button.png';
import PropTypes from 'prop-types';

function Controls({ onSubmit, onChange, url, text }) {
    return (
        <form onSubmit={onSubmit}>

            <label htmlFor='get'><input type='radio' id='get' name='method' value='GET' onChange={onChange} />
            GET
            <img src={button} alt='black button' /></label>

            <label htmlFor='post'><input type='radio' id='post' name='method' value='POST' onChange={onChange} />
            POST
            <img src={button} alt='black button' /></label>

            <label htmlFor='put'><input type='radio' id='put' name='method' value='PUT' onChange={onChange} />
            PUT
            <img src={button} alt='black button' /></label>

            <label htmlFor='delete'><input type='radio' id='delete' name='method' value='DELETE' onChange={onChange} />
            DELETE
            <img src={button} alt='black button' /></label>

            <section>
            <br />
            <label htmlFor='search-bar'>
                <input data-testid='search-bar' id='search-bar' name='url' value={url} onChange={onChange} />
            </label>
            <button data-testid='that' aria-label='go'>Go!</button>
            </section>

            <section>
                <br />
                <textarea name='text' value={text} onChange={onChange} rows="8" cols="50"></textarea>
            </section>

        </form>
    )
}

Controls.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default Controls;
