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
    setCurrentUser({id:1,name:"Iman",profilepic:"https://media.licdn.com/dms/image/D4E03AQF2miu0lFPN4A/profile-displayphoto-shrink_800_800/0/1676478695714?e=2147483647&v=beta&t=2mDH3B_ektPudY0YH4E06hyAOJfby_E3FTdMwpU8jJE"})
}

return (

    <AuthContext.Provider value={{login,currentUser}}>{children}</AuthContext.Provider>
)
}