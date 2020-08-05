import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactFormTemplate from './_contact-form-template';
//import {render,fireEvent} from '../../../test-utils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
 describe("ContactFormTemplate component",() =>{
    const store = createStore(() => ({ contacts: [] }))
    test("Matches the snapshot",() => {
        const input = create(<Provider store={store}><ContactFormTemplate /></Provider>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("ContactTemplate element is rendered",() => {
        const { getByTestId, getByText } = render(<Provider store={store}><ContactFormTemplate /></Provider>);
        expect(getByTestId("ContactFormTemplate")).toBeInTheDocument();
        
    });
   
   
   

});