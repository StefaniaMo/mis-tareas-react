import Perfil from "./perfil/Perfil";
import Producto from "./producto/Producto";

function Tarea20() {
  const listaProductos = [
    { id: 1, nombre: "Zapatillas Running", precio: "$85.000" },
    { id: 2, nombre: "Remera Deportiva", precio: "$25.000" },
    { id: 3, nombre: "Gorra Trucker", precio: "$12.000" }
  ];

  return (
    <>
      <Perfil />

      <h2 style={{marginBlock:'30px'}}>Nuestros Productos</h2>
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {listaProductos.map((prod) => (
          <Producto 
            key={prod.id} 
            nombre={prod.nombre} 
            precio={prod.precio} 
          />
        ))}
      </div>
    </>
  );
}

export default Tarea20;
