import './producto.css';
// 🎯 PARTE 1: Crear componente Producto

function Producto({nombre, precio}) {
    return (
        <div className="product">
            <h3>{nombre}</h3>
            <p>Precio: <strong>{precio}</strong></p>
    </div>
    )
}

export default Producto;