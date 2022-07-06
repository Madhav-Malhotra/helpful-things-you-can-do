import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied URL!");
  };

  return (
    <nav className='navbar navbar-inverse navbar-fixed-top'>
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" title="Go to homepage">Helpful Things You Can Do</Link>
        </div>
        <div className='share-link'>
          <button onClick={handleShare}>
            <img alt="Copy URL" title="Copy URL" className='copy-url' src="/img/share.png" />
          </button>
        </div>
      </div>
    </nav>
  )
}
