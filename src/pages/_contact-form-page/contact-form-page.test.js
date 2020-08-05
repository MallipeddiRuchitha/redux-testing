import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactFormPage from './_contact-form.-page';
//import {render,fireEvent} from '../../../test-utils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
 describe("ContactFormPage component",() =>{
    const store = createStore(() => ({ contacts: [] }))
    test("Matches the snapshot",() => {
        const input = create(<Provider store={store}><ContactFormPage /></Provider>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("ContactFormPage element is rendered",() => {
        const { getByTestId, getByText } = render(<Provider store={store}><ContactFormPage /></Provider>);
        expect(getByTestId("ContactFormPage")).toBeInTheDocument();
        
    });
   
   
   

});