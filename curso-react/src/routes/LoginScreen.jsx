import { useFormState } from "./hooks/useFormState"
import { useContext } from "react"
import { UsuarioContext } from "./context/UsuarioContext"

export const LoginScreen = () => {
  
  const onSubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)
  }
  
  const initialForm = {
    name:"",
    email:"",
    age:""
  }
  
  const { setUsuario } = useContext(UsuarioContext)

  const {formState,name,email,age,onInputChange} = useFormState(initialForm)


  return(
    <>
    <form onSubmit={onSubmit} >
      <div className="input-group mb-3">
        <input onChange={onInputChange} value={name} name="name" type="text" className="form-control" placeholder="name"/>
      </div>
      <div className="input-group mb-3">
        <input onChange={onInputChange} value={email} name="email" type="text" className="form-control" placeholder="email"/>
      </div>
      <div className="input-group mb-3">
        <input onChange={onInputChange} value={age} name="age" type="text" className="form-control" placeholder="age"/>
      </div>
      <button className="btn btn-primary" type="submit">Enviar</button>
    </form>
    </>
  )
}