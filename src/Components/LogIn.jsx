import React from 'react'
import { AuthContext } from '../Contexts/AuthContext'

function LogIn() {
    const {handleToken,handleloging,handleLogout}=React.useContext(AuthContext)
    const [formData,setFormData]=React.useState({
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        // console.log(e.target.id)
        const {id,value}=e.target
        setFormData({...formData,
        [id]:value})

    }
    const {Email,passWord}=formData

    const handleSubmit =(e)=>{
        e.preventDefault()
        // console.log(formData)
        fetch(`https://reqres.in/api/login`,{
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                "content-type":"application/json"
            }
        }).then((res)=>res.json())
        .then((res)=>{
            // console.log(res);
            // console.log(res.token ? "true":"false");
            handleToken(res.token)
            res.token ? handleloging():handleLogout()
        })
    }
  return (
    <div>{
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder='Email'
            id='email'
            value={Email}
           onChange={handleChange}
            />
            <br />
             <input type="text" 
            placeholder='Password'
            id='password'
            value={passWord}
           onChange={handleChange}
            />
            <br />
            <input type="submit" value="SUBMIT" />
        </form>}
    </div>
  )
}

export  {LogIn}