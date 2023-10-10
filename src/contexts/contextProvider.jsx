import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const host =" http://localhost:5000";
  const Data = [];
  const User = [];
  const [data, setData] = useState(Data);
  const [userData, setUserData] = useState(User);


  // ManageCategory
      //Get all notes
      const getData = async () => {
        // To do api call
      //   const response = await fetch(`${host}/api/notes/editnote/${id}`, {
      //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
      //     headers: {
      //         "Content-Type": "application/json",
      //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTYxZDhlMjQyMDdjNGJlNjE2MDE2In0sImlhdCI6MTY5NDU5NTg4MH0.QGYzqh_2nb1KD9JrKGbOz4asKGO-_Kj9XFDhZlSHfoA", 
      //     },

          
      // });
      //   const json = await response.json()
      //   console.log(json);
      //   setData(json);
      };


      //addNote
      const addNote = async (id, category, name, image) => {
        //To do api call
      //   const response = await fetch(`${host}/api/notes/editnote/${id}`, {
      //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
      //     headers: {
      //         "Content-Type": "application/json",
      //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTYxZDhlMjQyMDdjNGJlNjE2MDE2In0sImlhdCI6MTY5NDU5NTg4MH0.QGYzqh_2nb1KD9JrKGbOz4asKGO-_Kj9XFDhZlSHfoA", 
      //     },

      //     body: JSON.stringify({category , name , image}), 
      // });
      // const json = await response.json(); 
      // console.log(json);

      // logic to add note
      // let newNotes = JSON.parse(JSON.stringify(note)) 
        console.log("Adding a new Note");
        const data1 = {
          id: id,
          category: category,
          name: name,
          image: image,
        };
        setData(data.concat(data1));
      };



      //deleteNote
      const deleteNote = (id) => {
        //To do api call
        if (id) {
          console.log("Deleting a new Note" + id);
          const newdata = data.filter((user) => {
            return user.id != id;
          });
          console.log(newdata);
          setData(newdata);
        }
      };


      //editNote
      const editNote = async (id, category, name, image) => {
        // to do api call
          //Api call
              //   const response = await fetch(`${host}/api/notes/editnote/${id}`, {
              //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
              //     headers: {
              //         "Content-Type": "application/json",
              //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTYxZDhlMjQyMDdjNGJlNjE2MDE2In0sImlhdCI6MTY5NDU5NTg4MH0.QGYzqh_2nb1KD9JrKGbOz4asKGO-_Kj9XFDhZlSHfoA", 
              //     },
      
              //     body: JSON.stringify({category , name , image}), 
              // });
              // const json = await response.json(); 
              // console.log(json);
      
        // let newData = JSON.parse(JSON.stringify(data))

        //logic to edit

        let newData = data;
        for (let index = 0; index < newData.length; index++) {
          const element = data[index];
          if (element.id === id) {
            newData[index].category = category;
            newData[index].name = name;
            newData[index].image = image;
            break;
          }
        }
        setData(newData); 
      };


  //ManageUser  
      // Get all notes to user
      const getUserData = async () => {
        // To do api call
      //   const response = await fetch(`${host}/api/notes/editnote/${id}`, {
      //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
      //     headers: {
      //         "Content-Type": "application/json",
      //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTYxZDhlMjQyMDdjNGJlNjE2MDE2In0sImlhdCI6MTY5NDU5NTg4MH0.QGYzqh_2nb1KD9JrKGbOz4asKGO-_Kj9XFDhZlSHfoA", 
      //     },

          
      // });
      //   const json = await response.json()
      //   console.log(json);
      //   setData(json);
      };


        //addNote to user 
        const addUserNote = async ( id , user, email, phone , joinDate) => {
          //To do api call
        //   const response = await fetch(`${host}/api/notes/editnote/${id}`, {
        //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
        //     headers: {
        //         "Content-Type": "application/json",
        //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTYxZDhlMjQyMDdjNGJlNjE2MDE2In0sImlhdCI6MTY5NDU5NTg4MH0.QGYzqh_2nb1KD9JrKGbOz4asKGO-_Kj9XFDhZlSHfoA", 
        //     },
      
        //     body: JSON.stringify({category , name , image}), 
        // });
        // const json = await response.json(); 
        // console.log(json);
      
        // logic to add note
        // let newNotes = JSON.parse(JSON.stringify(note)) 
          console.log("Adding a new Note");
          const data2 = {
            id: id,
            user: user,
            email: email,
            phone: phone,
            joinDate: joinDate,
          };
          setUserData(userData.concat(data2));
        };

          //deleteNote to User
      const deleteUserNote = (id) => {
        //To do api call
        if (id) {
          console.log("Deleting a new Note" + id);
          const newdata = userData.filter((user) => {
            return user.id != id;
          });
          console.log(newdata);
          setUserData(newdata);
        }
      };

      
      //editNote to user
      const editUserNote = async (id, user, email, phone , joinDate) => {
        // to do api call
          //Api call
              //   const response = await fetch(`${host}/api/notes/editnote/${id}`, {
              //     method: "PUT", // *GET, POST, PUT, DELETE, etc.
              //     headers: {
              //         "Content-Type": "application/json",
              //         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwMTYxZDhlMjQyMDdjNGJlNjE2MDE2In0sImlhdCI6MTY5NDU5NTg4MH0.QGYzqh_2nb1KD9JrKGbOz4asKGO-_Kj9XFDhZlSHfoA", 
              //     },
      
              //     body: JSON.stringify({category , name , image}), 
              // });
              // const json = await response.json(); 
              // console.log(json);
      
        // let newData = JSON.parse(JSON.stringify(data))

        //logic to edit
        for (let index = 0; index < userData.length; index++) {
          const element = userData[index];
          if (element.id === id) {
            userData[index].user = user;
            userData[index].phone = phone;
            userData[index].email = email;
            userData[index].joinDate = joinDate;
            break;
          }
        }
        setUserData(User); 
      };


  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{ data, setData, addNote, deleteNote, editNote , getData , userData 
        , addUserNote , deleteUserNote , editUserNote , getUserData}}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
