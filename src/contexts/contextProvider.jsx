import axios from "../axios";
const crypto = require('crypto');
import React, { createContext, useContext, useState , useEffect } from "react";
const encryptionKey = 'your-secret-key';
const StateContext = createContext();
export const ContextProvider = ({ children }) => {

  const host =" http://localhost:5000";
  const Data = [];
  const User = [];
  const [data, setData] = useState(Data);
  console.log(data)
  const [userData, setUserData] = useState(User);
  const [ myData , setmyData] = useState([]);
  const [ isError, setError] = useState("");

  // Create functions for encryption and decryption
const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
};

const decrypt = (text) => {
  const parts = text.split(':');
  const iv = Buffer.from(parts[0], 'hex');
  const encryptedText = parts[1];
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};

  // ManageCategory
  
      //Get all notes
      const getData = async () => {
        try {
          const response = await axios.get(`${host}/api/notes/allnotes`);
          const encryptedData = response.data;
      
          // Assuming the response contains the list of encrypted notes
          const decryptedData = encryptedData.map((encryptedNote) => {
            return {
              ...encryptedNote,
              name: decrypt(encryptedNote.name),
              image: decrypt(encryptedNote.image),
            };
          });
      
          // Update your state with the decrypted data
          setData(decryptedData);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Error fetching data: ' + error.message);
        }
      };


      //addNote
      const addNote = async (id, name) => {
        //To do api call
        try {
          const encryptedName = encrypt(name);
          const encryptedImage = encrypt(image);
      
          const response = await axios.post(`${host}/api/notes/addnote`, {
            category,
            name: encryptedName,
            image: encryptedImage,
          });
      
          // Assuming the response contains the newly added data, you can update your state with it.
          const newNote = response.data;
          setData([...data, newNote]);
        } catch (error) {
          console.error('Error adding note:', error);
          setError('Error adding note: ' + error.message);
        }

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

      useEffect( () => {
        addNote();
        // editNote();
        // deleteNotes();
        // getData();
      },[]);
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
