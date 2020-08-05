import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from './_contact-form';
//import {render,fireEvent} from '../../../test-utils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
 describe("ContactForm component",() =>{
    const store = createStore(() => ({ contacts: [] }))
    test("Matches the snapshot",() => {
        const input = create(<Provider store={store}><ContactForm /></Provider>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("Contact element is rendered",() => {
        const { getByTestId, getByText } = render(<Provider store={store}><ContactForm/></Provider>);
        expect(getByTestId("contactform")).toBeInTheDocument();
        
    });
   
   
   

});