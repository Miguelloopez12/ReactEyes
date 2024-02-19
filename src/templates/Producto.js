import React from 'react'

export default function Producto() {
  return (
    <main className="contenedor-producto">
    <div className="contenido-producto">
        <div className="imagen-producto">
            <img src="/img/sinbordes/QUARZT.jpeg" alt="" />
        </div>
        <div className="texto-producto">
            <h2 className="titulo-productos">Lentes sin bordes hidrocor Quarzt</h2>
            <h4>$ 65,000</h4>
            <p className="texto-productos">¡Renueva tu mirada con nuestros lentes de contacto sin bordes! <br/>
                ✅ Lentes ultra naturales.<br/>
                ✅ Durabilidad de 1 año.<br/>
                ✅ Comodidad y suavidad de última tecnología.<br/>
                ✅ ¡CONTRAENTREGA! 🛵<br/>
                Resalta tu belleza única y atrévete a lucir esa tonalidad que siempre quisiste. ¿Quieres experimentar la
                diferencia? ¡Ordénalos ahora y cambia tu mirada en segundos!</p>

            <ul>
                <a href="#" className="material-symbols-outlined icono-producto">shopping_cart</a>
                <a href="#" className="material-symbols-outlined icono-producto">favorite</a>
            </ul>

            <a href="compra.php" className="boton-producto">Comprar</a>

        </div>
    </div>
    </main>
  )
}
