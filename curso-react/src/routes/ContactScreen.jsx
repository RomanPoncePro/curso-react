import { useContext } from "react"
import { UsuarioContext } from "./context/UsuarioContext"

export const ContactScreen = () => {
  const {usuario} = useContext(UsuarioContext)
  
  return(
    <h1> contac screan Edad:{usuario.age} </h1>
  )
}