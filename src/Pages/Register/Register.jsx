import React, { useState } from 'react'
import '../Home/Home.css'
import addAvatar from '../assets/addAvatar.png'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {  auth ,storage} from "../Register/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const Register = () => {
  const [err,setErr] =useState(false)
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    const file=e.target[3].files[0];



    try{
      const res= await createUserWithEmailAndPassword(auth, email, password)
      

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on( 

        (error) => {
          setErr(true);
        }, 
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL,
            })
          });
        }
      );
    }catch(err){
      setErr(true);

    }
    
   

  }



  return (
    <div className='form-container'>
        <div className="form-wrapper">
            <span className="logo">Charan Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text"  placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                  <img src={addAvatar} alt="" width="35px" height="35px"/>
                  <span>Add an avatar</span>
                </label>
                <button>SignUp</button>
                {err && <span>Something went Wrong</span>}
            </form>
            <p>You do have an account? Login</p>

        </div>
      
    </div>
  )
}

export default Register
