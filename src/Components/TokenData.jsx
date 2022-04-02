import React from 'react'
import { AuthContext } from '../Contexts/AuthContext'

export default function TokenData() {
    const {tokenShow}=React.useContext(AuthContext)
  return (
    <div>{tokenShow}</div>
  )
}