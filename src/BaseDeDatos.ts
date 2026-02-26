import { Producto } from "./Producto";

export class BaseDeDatos {
    // 1. EL ESCONDITE: Variable estática privada para guardar la única instancia
    private static instancia: BaseDeDatos | null = null;

    // Nuestro inventario de prueba (¡Ojo! Solo queda 1 Whisky)
    private inventario: Producto[] = [
        new Producto(1, "Whisky Johnnie Walker Black", 1),
        new Producto(2, "Cerveza Pacena", 50)
    ];

    // 2. EL CANDADO: Constructor privado. Nadie puede hacer "new" desde afuera.
    private constructor() {
        console.log(" SISTEMA Abriendo conexión maestra a la Base de Datos...\n");
    }

    // 3. EL PORTERO: Punto de acceso global (Lazy Instantiation)
    static obtenerInstancia(): BaseDeDatos {
        if (BaseDeDatos.instancia === null) {
            BaseDeDatos.instancia = new BaseDeDatos();
        }
        return BaseDeDatos.instancia;
    }

    // --- Métodos de negocio de la licorería ---

    verStock(idProducto: number): void {
        const producto = this.inventario.find(p => p.id === idProducto);
        if (producto) {
            console.log(` Stock de ${producto.nombre}: ${producto.stock} unidades.`);
        }
    }

    venderProducto(idProducto: number): void {
        const producto = this.inventario.find(p => p.id === idProducto);
        if (producto && producto.stock > 0) {
            producto.stock -= 1;
            console.log(` Venta exitosa: Se vendió un ${producto.nombre}.`);
        } else {
            console.log(` Error: No hay stock suficiente para el producto ${idProducto}.`);
        }
    }
}