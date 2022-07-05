import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='navbar navbar-inverse navbar-fixed-top'>
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Helpful Things You Can Do</Link>
        </div>
      </div>
    </nav>
  )
}
