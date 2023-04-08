"use client"
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{

    const getFromLocalStorage = (key) => {
        if (!key || typeof window === 'undefined') {
            return null
        }
        return localStorage.getItem(key)
      }

    const [currentUser,setCurrentUser] = useState(
        JSON.parse(getFromLocalStorage("user"))
    )


useEffect(()=>{
  localStorage.setItem("user",JSON.stringify(currentUser))
},[currentUser])

const login = ()=>{
    setCurrentUser({id:1,name:"Iman",profilepic:"https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"})
}

return (

    <AuthContext.Provider value={{login,currentUser}}>{children}</AuthContext.Provider>
)
}