import { UsuarioContext } from './UsuarioContext';

const usuario = {
  name: "Roman",
  age: 23,
  email: "roman@gmail.com"
};

export const Userprovider = ({ children }) => {
  return (
    <UsuarioContext.Provider value={{ usuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
