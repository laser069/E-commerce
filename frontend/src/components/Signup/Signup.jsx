import React, { useState } from 'react';
import axios from 'axios';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Signup() {
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState('');

  const path = "http://localhost:5000"; // Your API path

  const handleInput = (e) => {
    const fileName = e.target.files[0];
    if(fileName){
      setAvatar(fileName);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('file', avatar);
    form.append("name", name);
    form.append("email", mail);
    form.append("password", password);

    try {
      // Make the POST request to create a user
      const response = await axios.post(`${path}/api/v2/create-user`, form);
      console.log(response.data);  // Handle success response (e.g., show a success message)
    } catch (error) {
      console.error("Error creating user:", error.response ? error.response.data : error.message); // Handle error
    }
  };

  return (
    <div className='flex box-border h-screen justify-center items-center bg-gray-100'>
      <div className='flex flex-col w-109 h-109 rounded-xl shadow-xl shadow-black-600 bg-sky-100'>
        <h1 className='text-center mt-5 text-2xl font-bold'>Create Account</h1>
        <div className='flex justify-center items-center mt-5'>
          <form className='flex flex-col justify-center items-center w-98' onSubmit={handleSubmit}>
            <div className='flex w-full h-8 mt-5 rounded-lg shadow-lg justify-center items-center bg-slate-200'>
              <input placeholder='user name' type='text' required value={name} onChange={(e) => setName(e.target.value)} className='w-full focus:outline-none ml-5 text-xl' />
              <FaUser className='mr-5 h-8 w-8' />
            </div>
            <div className='flex w-full h-8 mt-5 rounded-lg shadow-lg justify-center items-center bg-slate-200'>
              <input placeholder='email' type='text' required value={mail} onChange={(e) => setEmail(e.target.value)} className='w-full focus:outline-none ml-5 text-xl' />
              <MdEmail className='mr-5 h-8 w-8' />
            </div>
            <div className='flex w-full h-8 mt-5 rounded-lg shadow-lg justify-center items-center bg-slate-200'>
              <input type={visible ? "text" : "password"} placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)} className='w-full focus:outline-none ml-5 text-xl' />
              {visible ? (<IoEye onClick={() => setVisible(false)} className='mr-5 h-8 w-8' />) : (<IoEyeOffOutline onClick={() => setVisible(true)} className='mr-5 h-8 w-8' />)}
            </div>
            <div className='flex flex-col w-full h-15 mt-5 rounded-lg shadow-lg justify-center items-center bg-slate-200'>
              <label>Set your profile pic</label>
              <input type='file' name="avatar" className='bg-amber-200' onChange={handleInput} />
            </div>
            <button className='mt-5 w-full bg-blue-300 p-2 rounded-lg shadow-lg' type='submit'>Submit</button>
            <div className='mt-1 flex'>
              <p className='text-sm'>Already have an account?</p>
              <p className='text-sm ml-2 text-blue-500'>Login</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
