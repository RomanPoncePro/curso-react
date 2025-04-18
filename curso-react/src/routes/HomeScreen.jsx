import { useContext } from 'react';
import { UsuarioContext } from './context/UsuarioContext'

export const HomeScreen = () => {
  
  const { usuario } = useContext(UsuarioContext)
  console.log({usuario})

  return(
    <>
    <p>{usuario.name}</p>
    <p>{usuario.age}</p>
    <p>{usuario.email}</p>
    </>
  )
}