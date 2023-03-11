import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {

    const data = localStorage.getItem("Login_credentials:")
    if(data){
        return children
    }else{

        return (  
             
             < Navigate to="/login"/>

          )

    }

  
}
