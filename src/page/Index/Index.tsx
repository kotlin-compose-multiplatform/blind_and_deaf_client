import React, {useState, useEffect} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Container} from "@mui/material";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Index = () => {
    const location=useLocation()
    useEffect(()=>{
        window.scrollTo(0,0);
    },[location])
    return (
        <div>
            <Navbar direction={'row'}/>
            <Container fixed sx={{mt:10}}>
                <Outlet/>
            </Container>
            <Footer/>
        </div>
    )
}

export default Index;