import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './_input';

describe("Input component",() =>{
    test("Matches the snapshot",() => {
        const inputField = create(<Input />);
        expect(inputField.toJSON()).toMatchSnapshot();

    })
    test("input element is rendered",() => {
        const { getByTestId, getByText } = render(<Input />);
        expect(getByTestId("input")).toBeInTheDocument();
        
    });
    test("on change of input",() => {
        const mockOnChange = jest.fn();
        const { getByTestId} = render(<Input value="name"  onChange={mockOnChange}/>);        
        fireEvent.change(getByTestId("value"),{ target: { value: 'ram' } });
        
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
   

});