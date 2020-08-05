import * as actions from './contactAction'
//import * as types from '../../constants/ActionTypes'

describe('actions', () => {
  test('should create an action to create a contact', () => {
    const name = 'abc'
    const email="abc@gmail.com"
    const expectedAction = {
      type: 'CREATE_NEW_CONTACT',
      contact:name,
      email

    }
    expect(actions.createContact(name,email)).toEqual(expectedAction)
  })

  test('should delete an action to delete a contact', () => {
    const id=1;
    
    const expectedAction = {
      type: 'REMOVE_CONTACT',
      id:id

    }
    expect(actions.deleteContact(id)).toEqual(expectedAction)
  })









})
