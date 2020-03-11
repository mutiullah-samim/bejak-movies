import React from 'react'
import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="header d-flex flex-row alig-items-center">
			<Link to='/'><h3>BJAK Movies</h3></Link>
		</div>
	)
}

export default Header
