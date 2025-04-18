import { NavLink,Link } from "react-router-dom"
import { useFormState } from "../hooks/useFormState"

export const Navbar = () => {
	const initialForm = {
		name:"",
		email:"",
		age:""
	}



	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						Aplicacion de enrutamiento
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">
									Contact
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/login" className="nav-link">
									Login
								</NavLink>
							</li>
		
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}