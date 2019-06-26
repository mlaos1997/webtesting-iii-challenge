// Test away!
import React from 'react';
import renderer from 'react-test-renderer'; 
import { render, fireEvent, getByText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'

import Controls from './Controls';

describe('<Controls />', () => {
    it('provides buttons to toggle the closed and locked states', () => {
       const { getByText } = render(<Controls locked={false} closed={true}/>);
       
       const lockedButton = getByText(/lock gate/i);
       const closedButton = getByText(/open gate/i);
    });

    it('should change buttons text to reflect the state the door will be in if clicked', async () => {
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();

        const { getByText, findByText } = render(<Controls locked={false} closed={true} toggleLocked={toggleLocked} toggleClosed={toggleClosed} />)
        let lockedButton = getByText(/lock gate/i);
        let closedButton = getByText(/open gate/i);

        fireEvent.click(lockedButton);
        fireEvent.click(closedButton);

        expect(toggleLocked).toHaveBeenCalled();
        expect(toggleClosed).toHaveBeenCalled();

        lockedButton = await expect(findByText(/unlock gate/i));
        closedButton = await expect(findByText(/close gate/i));
    });
 });