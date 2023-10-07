import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  
const data = [
    {
      id: "data",
      category: "category",
      name: "name",
      image: "image",
      action: "status",
    },
    {
      id: "data2",
      category: "category1",
      name: "name1",
      image: "image1",
      action: "action1",
    },
    {
      id: "data3",
      category: "category",
      name: "name2",
      image: "image",
      action: "status",
    },
    {
      id: "data4",
      category: "category1",
      name: "name3",
      image: "image1",
      action: "action1",
    },
  
  ];
  
  const [ Data , setData ] = useState(data);

  //addNote
  const addnote = ( Category , name , action ) => {
    //To do api call    

    data = {
      id: "data5",
      category: "category",
      name: "name5",
      image: "image1",
      action: "action1",
    }
    setData(Data.push(data));
  
  }

  //deleteNote
  const deleteNote = ( ) => {

  }

  //editNote
  const editNote = ( ) => {


  }
    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <StateContext.Provider value={{ Data , setData , addnote , deleteNote , editNote}}>
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);