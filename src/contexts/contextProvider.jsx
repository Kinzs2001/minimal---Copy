import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  
const Data = [];
  
  const [ data , setData ] = useState(Data);

  //addNote
  const addNote = ( id , category , name , image ) => {
    //To do api call    
    console.log( "Adding a new Note");
    const data1 = {
      "id": id,
      "category": category,
      "name": name,
      "image": image,
    }
    setData(data.concat(data1));
  
  }

  //deleteNote
  const deleteNote = (id) => {
    //To do api call   
    if(id){
      console.log( "Deleting a new Note" + id);
      const newdata = data.filter( (user) =>  {return  user.id != id;} );
      console.log(newdata);
      setData(newdata);
    }
   
  }

  //editNote
  const editNote = ( ) => {


  }
    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StateContext.Provider value={{ data , setData , addNote , deleteNote , editNote}}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);