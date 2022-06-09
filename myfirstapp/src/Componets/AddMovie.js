import React from 'react'
import  { useState } from 'react'
import { Button ,Modal} from 'react-bootstrap';

 function AddMovie({add}) {

  const[show,setShow]= useState(false)
  const[newmovie,setNewmovie]=useState({
    Title:" maw ",

    Ratting : 2});
  const handelchange=(e)=>{ 
    setNewmovie({...newmovie,[e.target.name]:e.target.value})}
   
  

  return (
    <div className="add">
       <Button onClick={() =>{setShow(! show)} }> +</Button>
        {show ? <Modal.Dialog >
  <Modal.Header closeButton>
    <Modal.Title>Add Movie</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <label>title</label>
        <input type="text" name="Title" onChange={handelchange}/>
        </Modal.Body>
          <Modal.Body>
        <label>URL</label>
        <input type="url" name="imgurl" onChange={handelchange}/>
        </Modal.Body>
          <Modal.Body>
          <label>desc</label>
          <input type="text" name="description" onChange={handelchange}/>
          </Modal.Body>
          <Modal.Body>
          <label>rating</label>
          <input type="number" name="Ratting" onChange={handelchange}/>
      
    </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={() =>{setShow(false)}}>Close</Button>
    <Button variant="primary" onClick={() => {add(newmovie)}}>Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>:null}
    </div>
  )
}

export default AddMovie 

