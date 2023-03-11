import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const data = localStorage.getItem("Login_credentials:")
  console.log("nav: ",data)
  const navigate = useNavigate();

  const handleClick = ()=>{
    if(data){
      localStorage.removeItem("Login_credentials:")
      navigate("/login")
    }else{
      navigate("/login")
    }
  }
  return (
   <Flex>
    <Box style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px", width:"100%", height:"60px", margin:"auto", display:"flex", gap:"30px", justifyContent:"flex-end", alignItems:"center", padding:"15px"}}>
    <Link className="homebutton" to="/" >Home</Link>
    <Button style={{backgroundColor:"skyblue", color:"white" }} onClick={handleClick}>{data ? "Logout" : "Login"}</Button>
    </Box>
    
    
   </Flex>
  )
}
