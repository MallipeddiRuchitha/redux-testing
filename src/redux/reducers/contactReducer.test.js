import reducer from './contactReducer'


describe('contact reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([     
    ])
  })
  test('should add contact', () => {
    expect(reducer([], { type: 'CREATE_NEW_CONTACT',
    contact:"abc",
    email:"abc@gmail.com"
})).toEqual([ {
    name:"abc",
    email:"abc@gmail.com",
   
}    
    ])
  })
 
  test('should delete contact', () => {
    expect(reducer([{
        name:"abc",
        email:"abc@gmail.com",
       
    }   ], { type: 'REMOVE_CONTACT',
    id:0
})).toEqual([ 
    ])
  })
  test('no change in state  when wrong index is given to remove contact', () => {
    expect(reducer([{
        name:"abc",
        email:"abc@gmail.com",
       
    }   ], { type: 'REMOVE_CONTACT',
    id:1
})).toEqual([ {
    name:"abc",
    email:"abc@gmail.com",
   
}
    ])
  })
   
    
})