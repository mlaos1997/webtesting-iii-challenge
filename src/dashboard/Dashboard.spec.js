import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/react/cleanup-after-each'

import Dashboard from './Dashboard';

// Test away
describe('<Dashboard />', () => {
    xit('matches snapshot', () => {
        const tree = renderer.create(<Dashboard/>);

        expect(tree.toJSON()).toMatchSnapshot();
    });
});