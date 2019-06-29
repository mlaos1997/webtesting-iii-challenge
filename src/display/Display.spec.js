// Test away!
import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';
import '@testing-library/react/cleanup-after-each'

describe('<Display />', () => {
    it('displays if gate is open/closed and if it is locked/unlocked', () => {
        const {getByText} = render(<Display locked={true} closed={true}/>);
        getByText('Locked');
        getByText('Closed');
    });

    it('displays closed if closed prop is true, and locked if lock props is true', () => {
        const {getByText} = render(<Display locked={true} closed={true}/>);
        getByText('Closed');
        getByText('Locked');
    });

    it('displays open if closed prop is false, and unlocked if locked prop is false', () => {
        const {getByText} = render(<Display locked={false} closed={false}/>);
        getByText('Open');
        getByText('Unlocked');
    });

    it('uses the green-led class when unlocked or open', () => {
        const {container} = render(<Display locked={false} closed={false}/>);
        expect(container.children[0].children[0]).toHaveClass('led green-led');
    });

    it('uses the red-led class when locked or closed', () => {
        const {container} = render(<Display locked={true} closed={true}/>)
        expect(container.children[0].children[0]).toHaveClass('led red-led');
    })
});