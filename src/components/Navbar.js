    import React from 'react'
    import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


    export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg Navbar-${props.mode} bg-${props.mode}`}>+
        <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">{props.about}</Link>
            </li>
            </ul>

            <form className="d-flex mx-5" role="search">
            <input className="form-control me-2"  style={{backgroundColor: props.mode==='light'?'white':'#6c757d',color: props.mode==='light'?'black':'white'}} type="search" aria-label="Search"/>
            <button className={`btn btn-outline-success text-${props.mode==='light'?'dark':'light'}`} type="submit">{props.searchBar}</button>
            </form>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-5`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Choose Dark Mode</label>
            </div>

            {/* <div class={`btn-group  text-${props.mode==='light'?'dark':'light'} mx-2`}role="group" aria-label="Basic mixed styles example" id='choose'  onClick={props.toggleMode}>
                <button type="button" class="btn btn-primary" id='blue'>Blue</button>
                <button type="button" class="btn btn-success" id='green'>Green</button>
                <button type="button" class="btn btn-secondary" id='black'>Black</button>
                
            </div> */}
            {/* <label className={`form-check-label  text-${props.mode==='light'?'dark':'light'} my-2`} htmlFor="flexSwitchCheckDefault">Choose Dark Mode</label> */}
        </div>
        </div>
    </nav>
    )
    }

    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        searchBar: PropTypes.string.isRequired,
    }
    Navbar.defaultProps = {
        about: 'About us',
        searchBar: 'Search',
    };