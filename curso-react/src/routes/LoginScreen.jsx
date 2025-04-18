export const LoginScreen = () => {
  return(
    <>
    <form>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">name</span>
        <input type="text" className="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon2"/>
        <span className="input-group-text" id="basic-addon2">@example.com</span>
      </div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="age" aria-label="age" aria-describedby="basic-addon2"/>
        <span className="input-group-text" id="basic-addon2">12</span>
      </div>
      <button type="submit">Enviar</button>
    </form>
    </>
  )
}