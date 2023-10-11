import React, { useEffect, useRef, useState } from 'react'
import './category.css'
 import img from '../../Images/wp5135903.jpg'
import { Modal } from 'reactstrap'
import axios from 'axios'
import {MdModeEdit,MdOutlineDeleteOutline} from 'react-icons/md'
function Category() {

  const[file, setFile]=useState()
    const [updateState, setUpdateState] = useState(-1)
    const [lists, setLists] = useState([])
    const nameRef = useRef();
    const [emailError, setEmailError] = useState("")
    const [emaiError1, setEmailError1] = useState("")
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    function handleFile (event){     
   // console.log("===",URL.createObjectURL( event.target.files[0]))
      setFile(URL.createObjectURL( event.target.files[0]))
    }
  
  //  const axiosInstance = axios.create({
  //   baseURL: 'http://localhost:3333/',
  //   headers: {
  //     "Access-Control-Allow-Origin": "http://localhost:3000",
  //   }
  // });
  //   axiosInstance.get('data');
    useEffect(()=>{

      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        }
      };
      
    axios.get("http://localhost:3333/category", config)
    .then((response) => {
    setLists(response.data); 
    
    }).catch((err)=>{
      console.log(err)
    }) 
    
    },[])
    console.log(lists)
    function  onSubmit(event,data){  
        event.preventDefault();
        const category_name = event.target.elements.category_name?.value;
        const image = event.target.elements.image?.value;
        const newList={ 
          category_name,image
        }
        setLists((prevList)=>{
          // const values =  lists.map(value => value.category);
        
          // if(!values.includes(newList.category)){  
             setModalIsOpen(false)
             return prevList.concat(newList)
        //   }
        // else{
        //   setEmailError("This category is already  arrived")
        //   return prevList;
          
        // }
      })
        setEmailError("")
        setInputValue("")
        nameRef.current.value= ""
      }
      
    function EditList ({current , lists ,setLists}){
        function handInputcategory(event){
          const value =event.target.value;
         const newlist=  lists.map((li)=>(
            li.id === current.id ? {...li , category_name:value}:li
          ))
          setLists(newlist)
        }
        function handInputimage(event){
          const value =event.target.value;
         const newlist=  lists.map((li)=>(
            li.id === current.id ? {...li , image:value}:li
          ))
          setFile(URL.createObjectURL( event.target.files[0]))
          setLists(newlist)
        }
        return(
          <tr>
            <td> <input type='text' name='category_id'  value={current.category_id}/></td>
            <td> <input type='text' name='category_name'  onChange={handInputcategory}  
            value={current.category}/></td>
            <td><input 
                type="file" 
                name="image" 
                className='file'
                onChange={handInputimage}
                ref={fileRef}
                /></td>
            <td><button type='submit'>Update</button></td>
          </tr>
        )
      }
      function handleDelete(id){
         const newlist = [...lists]
         newlist.splice(id, 1);
         setLists(newlist)
         
        }
      function handleEdit(id){
         setUpdateState(id)

      }
      function handleSubmit(event){
          event.preventDefault()
          const category_name = event.target.elements.category_name?.value;
          const image = event.target.elements.image?.value;
          const newlist=  lists.map((li)=>(
          li.id === updateState ? {...li , name:category_name ,image:image}:li
          ))         
        setLists(newlist)
        setUpdateState(-1)
      }
      const fileRef = useRef(null);
      const setModalIsOpenToTrue =()=>{
          setModalIsOpen(true)
      }
      function handleChange(event) {
        setInputValue(event.target.value);
        
      }
  
 return (
    <div className='containerr0'>
        <h1>Manage Category</h1>
        
        <div className='containers4'>
        <div className='as'>
        <button onClick={setModalIsOpenToTrue} className='add2'>Add</button>
        <Modal isOpen={modalIsOpen}>
        <form onSubmit={onSubmit}>  
        <div>
        <span className='cat'>Enter Category:</span>
        <input 
        type='text ' 
        className='search'
        ref={nameRef}
        name='category_name'
        value={inputValue}
        onChange={handleChange}
        placeholder='Enter Category Name'
        /><br></br>
        <div className='erroor'>
        {emailError.length > 0  && <div className="erroor"> {emailError} </div>}
        {/* {/ {emaiError && <div className="erroor"> {emaiError} </div>} /} */}
        </div>
        </div>
        <span className='cat'>Enter Image:</span>
          <input 
        type="file" 
        name="image" 
        className='file1'
        onChange={handleFile}
        ref={fileRef}
        /><br></br>
        <button className='add1' disabled={!inputValue}  >Add</button>
        </form>
        </Modal>
        </div>
    
        <form onSubmit={handleSubmit} >
        <table id='customers'>
        <tbody>     
        <tr>
            <th  >id</th>
            <th>Category name</th>
            <th>Category image</th>
            <th> Action </th>
        </tr>
    { 
    lists.map((current,key)=>(
        updateState===  current.id? <EditList current={current} lists={lists} setLists={setLists}/> :
        <tr key={key}>
             <td>{current.category_id}</td>
            <td>{current.categary_name}</td>
            <td>
               
           {/* {/ <img src={img} alt='' className='imagee'/> /} */}
            </td>
            <td>
              <MdModeEdit className='edit'    onClick={()=> handleEdit(current.id)} />
                <MdOutlineDeleteOutline className='delete'  onClick={()=> handleDelete(current.id)}/>
                </td>
        </tr>
      ))
    }
        </tbody>
        </table>
        </form>
        </div>
     </div>
  )
}

export default Category