import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import {LuEyeClosed} from "react-icons/lu"

function Signup(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState("")
    const [visible,setVisible] = useState(false);
    return (
        <>
        <div className='flex box-border h-screen justify-center items-center'>
            <div className="flex flex-col w-109 h-109 border rounded-xl shadow-xl shadow-black-600">
                <div>
                    <h1 className="text-center mt-5 text-2xl font-bold">Create Account</h1>
                </div>
            <div className="flex justify-center items-center mt-5">
            <form className="flex flex-col justify-center items-center w-98">
                <div className="flex w-full h-5 mt-5 rounded-lg  shadow-lg justify-center items-center">
                    <input type="text" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} required  className="w-full focus:outline-none "/>
                    <FaRegUser className="mr-5 h-8 w-8"/>

                </div>
                <div className="flex w-full h-5 mt-5 rounded-lg  shadow-lg justify-center items-center">
                    <input type="email" value={email} onChange={(e)=>{
                        setName(e.target.value)
                    }} required  className="w-full focus:outline-none "/>
                    <MdAlternateEmail className="mr-5 h-8 w-8"/>

                </div>
                <div className="flex w-full h-5 mt-5 rounded-lg  shadow-lg justify-center items-center">
                    <input type="email" value={email} onChange={(e)=>{
                        setName(e.target.value)
                    }} required  className="w-full focus:outline-none "/>
                    <MdAlternateEmail className="mr-5 h-8 w-8"/>
                    type={visible?"text":"password"}
                </div>
                <div className="flex w-full h-5 mt-5 rounded-lg  shadow-lg justify-center items-center">
                    <input type={visible?"text":"password"} value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} required  className="w-full focus:outline-none " />
                    
                    
                </div>
            </form>
            </div>
        </div>
        </div>
        
        
        
        </>
    )
}

export default Signup;


