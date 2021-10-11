import React from "react";
import '../css/header.css'

class Header extends React.Component{
    render() {
        console.log(this)
        return (
            <header>
            <div className="card-header">
                <img className="logo" src={this.props.logo} alt="logo" />
                <nav className="nav-bar">
                    <a href="">Baixar</a>
                    <a href="">Nitro</a>
                    <a href="">Segurança</a>
                    <a href="">Suporte</a>
                    <a href="">Blog</a>
                </nav>
                <button className="btn-enter">
                    Entrar
                </button>
            </div>
        </header>
        )
    }
}

export default Header;