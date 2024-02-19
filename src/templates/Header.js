import React from 'react'

export default function Header() {
  return (


<div className="inicio">
    <header className="iniciodos">
        <div className="menuuno">
            <h1 className="titulo">EyesGlowLenses</h1>
            <nav className="menunavegacion">
                <a href="/">Inicio</a>
                <a href="#">Buscar</a>
            </nav>
            <div className="container-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon-cart"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
                <div className="count-products">
                    <span id="contador-productos">1</span>
                </div>
            </div>
        </div>
    </header>

    <header className="headerdos">
        <div className="menudos">
            <nav className="menudecategoria">
                <a href="/">Lentes con bordes</a>
                <a href="/lentessinbordes.html">Lentes sin bordes</a>
                <a href="#">Lentes tricolor</a>
            </nav>
        </div>
    </header>
</div>

  )
}
