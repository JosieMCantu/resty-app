import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RestyContainer from './RestyContainer';

describe('RESTy app tests', () => {
    it('renders resty to the screen', async () => {

        render(<RestyContainer />);

        screen.getByText('Resty', {exact: false});

        const input = await screen.findByLabelText('GET');
        userEvent.type(input, 'GET');

        const button = await screen.getByTestId('that');

        const textInput = await screen.getByTestId('search-bar');
        fireEvent.change(textInput, {target: {value: 'https://rickandmortyapi.com/api/episode/1'}});
        fireEvent(
            button,
            new MouseEvent('click')
          )
        return waitFor(() => {
            const historyItems = screen.getAllByText('rickandmortyapi', {exact: false});
            expect(historyItems[0]).not.toBeEmptyDOMElement();
        })

    });
});