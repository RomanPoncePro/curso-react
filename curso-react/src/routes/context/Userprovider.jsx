import { UsuarioContext } from './UsuarioContext';
import { useState } from 'react'; 

export const Userprovider = ({ children }) => {

  const [ usuario,setUsuario ] = useState({})

  return (
    <UsuarioContext.Provider value={{ usuario,setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
