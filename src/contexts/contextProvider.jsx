import React, { createContext, useContext, useState  } from "react";
import axios from "../axios";
const cryptLib = require('cryptlib');

const iv = cryptLib.generateRandomIV(16); 
const secretKey = process.env.SECRET_KEY;
const staticKey = process.env.STATIC_KEY;
const StateContext = createContext();



export const ContextProvider = ({ children }) => {

  const User = [];
  const [userData, setUserData] = useState(User);
  const [ myData , setmyData] = useState([]);
  const [ isError, setError] = useState("");
  const [data, setData] = useState(myData);
  
  // Create functions for encryption and decryption
  function encrypt(data) {
    try {
      const key = cryptLib.getHashSha256(secretKey, 32); // Generate a 256-bit key
      const encryptedText = cryptLib.encrypt(data, key, iv);
      if(!encryptedText){
        const obj = {
          status_code: 0,
          message: "Encryption error!",
          data: "Encryption failed. Invalid data or key."
        }
        const string = JSON.stringify(obj)
        const res = encrypt(string);
        return
      }else{
  return encryptedText; // String
      }
     } catch (error) {
      console.error('Encryption error: ' + error.message);
      throw "Encryption failed. Invalid data or key."
    }
  }

  function decrypt(encryptedText) {
    try {
      const key = cryptLib.getHashSha256(secretKey, 32); // Generate a 256-bit key
      const originalText = cryptLib.decrypt(encryptedText, key, iv);
      if (!originalText) {
        const obj = {
          status_code: 0,
          message: "Decryption error!",
          data: "Decryption failed. Invalid data or key."
        }
        const string = JSON.stringify(obj)
        const res = encrypt(string);
        return res;
      } else {
        return originalText; // String
      }
    } catch (error) {
      console.error('Decryption error: ' + error.message);
      throw "Decryption failed. Invalid data or key.";
    }
  }

  // ManageCategory
  
      //Get all notes
      const getData = async () => {
        try {
          const response = await axios.post(`category_list` ,staticKey);
          const encryptedData = response.data;   
          const decryptedData = decrypt(encryptedData);  
          console.log(decryptedData); 
          setmyData(decryptedData); 
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Error fetching data: ' + error.message);
        }
      };


    //addNote
      // To do api call
      const addNote = async (id, name) => {
        try {
          const encryptedid = encrypt(id);
          const encryptedName = encrypt(name);
          const response = await axios.post(`/category_create`, {
            id: encryptedid,
            name: encryptedName,
          });
      
          // Assuming the response contains the newly added data, you can update your state with it.
          const newNote = response.data;
          setmyData([...data, newNote]);
        } catch (error) {
          console.error('Error adding note:', error);
          setError('Error adding note: ' + error.message);
        }

      };



      //deleteNote
      const deleteNote = (id) => {
        //To do api call
      //   if (id) {
      //     console.log("Deleting a new Note" + id);
      //     const newdata = data.filter((user) => {
      //       return user.id != id;
      //     });
      //     console.log(newdata);
      //     setData(newdata);
      //   }
      };


      //editNote
      const editNote = async (id, name) => {
        // to do api call


        //logic to edit

        let newData = data;

        for (let index = 0; index < newData.length; index++) {
          const element = newData[index];
          if (element.id === id) {
            newData[index].id = id;
            newData[index].name = name;
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
            return user.id !== id;
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
