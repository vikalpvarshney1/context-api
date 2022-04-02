import React from 'react'
import styled from "styled-components"
import { AuthContext } from '../Contexts/AuthContext'
const NavbarWrapper = styled.nav`
display:flex ;
flex-direction:row-reverse ;
color:white ;
padding:20px ;
background:black ;
align-items:center ;
`

function Navbar() {
    const {isAuth,handleLogout}=React.useContext(AuthContext)
  return (
    <NavbarWrapper>
        {
            isAuth ? <button onClick={()=>handleLogout()}>LogOut

            </button> : <button>LogIn</button>
        }
    </NavbarWrapper>
  )
}

export  {Navbar}