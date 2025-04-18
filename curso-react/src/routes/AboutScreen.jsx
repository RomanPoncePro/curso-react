import { useContext } from "react"
import { UsuarioContext } from "./context/UsuarioContext"


export const AboutScreen = () => {
  
  const { usuario } = useContext(UsuarioContext) 

  return(
    <h1>Aboutscrean Email:{usuario.email}</h1>
  )
}