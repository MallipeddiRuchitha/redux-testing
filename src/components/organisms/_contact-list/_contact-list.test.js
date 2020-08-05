import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactList from './_contact-list';
//import {render,fireEvent} from '../../../test-utils'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
 describe("ContactList component",() =>{
    const store = createStore(() => ({ contacts: [] }))
    test("Matches the snapshot",() => {
        const input = create(<Provider store={store}><ContactList /></Provider>);
        expect(input.toJSON()).toMatchSnapshot();

    })
    test("ContactList element is rendered",() => {
        const { getByTestId, getByText } = render(<Provider store={store}><ContactList /></Provider>);
        expect(getByTestId("contactlist")).toBeInTheDocument();
        
    });
   
   
   

});