
import React, { useState, useSyncExternalStore } from 'react'

export default function CreateProduct() {
    const [image,setImage] = useState([])
    const [preImage,setPreImage] = useState([])
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [category,setCategory] = useState("")
    const [tags,setTags] = useState("")
    const [price,setPrice] = useState("")
    const [stock,setStock] = useState("")
    const [email,setEmail] = useState("")
    const categoriesData = [{title:"Books"},{title:"Movies"},{title:"Electronics"},{title:"Furnitures"}]


    const handleImages = (e)=>{
        const imgs = Array.from(e.target.file)
        setImage((preimg)=>[...preimg,...imgs])
        const preurl = image.map((file)=>URL.createObjectURL(file))
        setPreImage((previmg)=>[...previmg,preurl])
        
    }




    return (
    <div>
        <h5>Create Product</h5>
        <form action="">
<label>Email <span className='text-red-500'>*</span></label>
<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' required/>
<label >Name
</label>
<input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required />
<label > Description</label>
<input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Desc' required/>
<label > tags</label>
<input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} placeholder='tags' required/>


<label > Categories</label>
<select type="text" value={description} onChange={(e)=>setCategory(e.target.value)} placeholder='Desc' required>
        <option >Select an option </option>
        {categoriesData.map((option,key)=>{
            <option value={option.title} key={key}>{option.title}</option>
        })}
        </select>
        <label >Price</label>
        <input type="number" value={price} onChange={e=>setPrice(e.target.value)} placeholder='Price' required />
        <label >Stock</label>
        <input type="number" value={stock} onChange={e=>setStock(e.target.value)} placeholder='Stock' required />
        <label className='pb-1 block'>Upload Images</label>
        <input type="file"  id="upload" onChange={handleImages} required multiple accept='.png .jpg .jpeg'/>
        {preImage.map((img,index)=>{
            <img 
                src={img}
                key={index}
                alt="Preview"
            />
        })}
        </form>
    </div>
  )
}





