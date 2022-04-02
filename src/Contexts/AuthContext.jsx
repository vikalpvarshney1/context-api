import React from "react";

export const AuthContext=React.createContext(true)

export function AuthContextProvider({children}){
    const [isAuth,setisAuth]=React.useState(false);
    const [tokenShow,setToken]=React.useState("")
    const handleloging=()=>{
        setisAuth(true)
    }

    const handleLogout=()=>{
        setisAuth(false)
    }
    const handleToken=(value)=>{
        setToken(value)
    }


    return(
        <AuthContext.Provider value={{isAuth,handleloging,handleLogout,tokenShow,handleToken}}>
            {children}
        </AuthContext.Provider>
    )
}