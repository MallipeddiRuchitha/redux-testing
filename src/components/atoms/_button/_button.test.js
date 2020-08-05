import React from 'react';
import { create } from "react-test-renderer";
import { render, fireEvent, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './_button';

describe("Button component",() =>{
    test("Matches the snapshot",() => {
        const button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();

    })
    test("button element is rendered",() => {
        const { getByTestId, getByText } = render(<Button />);
        expect(getByTestId("button")).toBeInTheDocument();
        
    });
   
   
    test("on click of button",() => {
        const mockOnClick = jest.fn();
        const { getByTestId, getByText,getByRole } = render(<Button value="save"  onClick={mockOnClick}/>);
        fireEvent.click(getByRole("button"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});