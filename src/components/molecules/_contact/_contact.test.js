import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './_contact';
//import {render,fireEvent} from '../../../test-utils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
 describe("Contact component",() =>{
    const store = createStore(() => ({ contacts: [] }))
    test("Matches the snapshot",() => {
        const input = create(<Provider store={store}><Contact name="abc" email="abc@gmail.com"/></Provider>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("Contact element is rendered",() => {
        const { getByTestId, getByText } = render(<Provider store={store}><Contact name="abc" email="abc@gmail.com"/></Provider>);
        expect(getByTestId("contact")).toBeInTheDocument();
        
    });
   
   
   

});