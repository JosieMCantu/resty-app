import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestyContainer from './RestyContainer';

describe('', () => {
    it('', async () => {

        render(<RestyContainer />)

        screen.getByText('Resty', {exact: false})
    })
})