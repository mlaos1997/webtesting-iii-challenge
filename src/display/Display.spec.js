// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
import Controls from '../controls/Controls';
import '@testing-library/react/cleanup-after-each'


describe('<Display />', () => {
    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        const { getByText } = render(<Display locked={true} closed={true} />);
        getByText('Locked');
        getByText('Closed');
    });

    it('displays closed if closed prop is true', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        getByText('Closed');
    });

    it('displays open if closed prop is false', () => {
        const { getByText } = render(<Display locked={false} closed={false} />);
        getByText('Open');
    });
});