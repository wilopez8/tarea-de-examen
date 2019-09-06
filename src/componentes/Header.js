import React, { Component } from 'react';
import logo from './../logo.svg'

class Header extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="navbar navbar-light bg-light text-center">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                        My proyecto de examen
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;