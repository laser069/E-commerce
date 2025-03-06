import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { LoginPage,SignupPage,HomePage,CreateProduct,MyProduct,ProductDetail } from './routes/Routes' 
import server from './server';
import axios from 'axios';

function App() {
    const [count, setCount] = useState(0);

useEffect(()=>{
axios.get(`${server}/user/getuser`,{withCredentials:true})
.then(res=>{console.log(res.data)
})
.catch()
},[])

    return (
        <>
        <Nav></Nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                 <Route path="/productCreate" element={<CreateProduct/>}/>
                 <Route path="/my-product" element={<MyProduct/>}/>
                 <Route path="/product/:id" element={<ProductDetail/>}/>
            </Routes>
 
        </>
    );
}

export default App;

/** */